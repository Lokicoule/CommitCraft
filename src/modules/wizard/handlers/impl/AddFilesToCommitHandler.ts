import { ProcessBuilderFactory } from "../../../../core/process/factory/ProcessBuilderFactory";
import { getStagedFiles, getUpdatedFiles } from "../../../../libs/git";
import { logMessage, promptMultiselect } from "../../../../libs/prompt";
import {
  WizardCommitState,
  WizardCommitStateMachine,
} from "../../state-machine/WizardCommitStateMachine";
import { BaseWizardCommitHandler } from "./BaseWizardCommitHandler";

export class AddFilesToCommitHandler extends BaseWizardCommitHandler {
  public async handle(
    _wizard: WizardCommitStateMachine
  ): Promise<WizardCommitState | null> {
    const stagedFiles = await getStagedFiles();

    if (stagedFiles.length > 0) {
      logMessage("Staged files:");
      stagedFiles.forEach((file) => logMessage(`- ${file}`));
    } else {
      const updatedFiles = await getUpdatedFiles();

      if (updatedFiles.length === 0) {
        logMessage("No files to add to commit.");
        return null;
      }

      const commitUpdatedFiles = await promptMultiselect<any, string>({
        message:
          "Select updated files (optional, press space to select, enter to confirm):",
        options: updatedFiles.map((file) => ({ value: file, label: file })),
      });

      const processBuilder = ProcessBuilderFactory.create();

      processBuilder.addArgs(["add", ...commitUpdatedFiles]).spawn("git");
    }
    return WizardCommitState.SELECT_COMMIT_CONVENTION;
  }
}
