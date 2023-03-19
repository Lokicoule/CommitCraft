import { yellow } from "picocolors";
import { PromptManager } from "../../../../libs/prompt";
import { CommitBuilder } from "../../builder/CommitBuilder";
import { CommitBody } from "../../types";
import { BaseConventionalHandler } from "./BaseConventionalHandler";

const ABORT_MESSAGE = `${yellow("✖")} Commit body aborted!`;

export class ConventionalBodyHandler extends BaseConventionalHandler {
  protected async processInput(commitBuilder: CommitBuilder): Promise<void> {
    const commitBody = await this.selectCommitBody();
    commitBuilder.withBody(commitBody);
  }

  private async selectCommitBody(): Promise<CommitBody> {
    const bodyLines: string[] = [];
    let hasBody = await this.promptManager.confirm({
      defaultValue: false,
      message: "Does this commit have a body?",
      abortMessage: ABORT_MESSAGE,
    });

    while (hasBody) {
      const bodyLine = await this.promptManager.text({
        message: "Please enter a body line:",
        abortMessage: ABORT_MESSAGE,
      });

      if (bodyLine) {
        bodyLines.push(bodyLine);
      }

      hasBody = await this.promptManager.confirm({
        defaultValue: false,
        message: "Do you need another body line?",
        abortMessage: ABORT_MESSAGE,
      });
    }

    return {
      message: bodyLines.join("\n"),
    };
  }
}
