import { Configuration } from "../../../../core/config";
import { RedGreenRefactorStateMachineFactory } from "../../../red-green-refactor/factory/RedGreenRefactorStateMachineFactory";
import { RedGreenRefactorFormatter } from "../../../red-green-refactor/formatter/RedGreenRefactorFormatter";
import {
  WizardCommitState,
  WizardCommitStateMachine,
} from "../../state-machine/WizardCommitStateMachine";
import { BaseWizardCommitHandler } from "./BaseWizardCommitHandler";

export class UseRedGreenRefactorHandler extends BaseWizardCommitHandler {
  public async handle(
    wizard: WizardCommitStateMachine
  ): Promise<WizardCommitState | null> {
    const stateMachine = RedGreenRefactorStateMachineFactory.create(
      this.promptManager,
      this.configuration
    );

    await stateMachine.handleCommit();

    wizard.setMessage(
      RedGreenRefactorFormatter.format(
        stateMachine.getStore(),
        Configuration.getConfig()["red-green-refactor"]
      )
    );

    return WizardCommitState.REVIEW_COMMIT_MESSAGE;
  }
}
