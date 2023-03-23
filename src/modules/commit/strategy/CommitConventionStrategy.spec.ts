import { ConventionalCommitConventionStrategy } from "~/modules/conventional/strategy/ConventionalStrategy";
import { RedGreenRefactorCommitConventionStrategy } from "~/modules/red-green-refactor/strategy/RedGreenRefactorStrategy";
import {
  CommitConventionStrategyFactory,
  CommitConventionStrategyType,
} from "./CommitConventionStrategy";

describe("CommitConventionStrategyFactory", () => {
  test("should create a conventional commit strategy", () => {
    const strategy = CommitConventionStrategyFactory.create(
      CommitConventionStrategyType.CONVENTIONAL,
      {} as any
    );

    expect(strategy).toBeInstanceOf(ConventionalCommitConventionStrategy);
  });

  test("should create a red-green-refactor commit strategy", () => {
    const strategy = CommitConventionStrategyFactory.create(
      CommitConventionStrategyType.RED_GREEN_REFACTOR,
      {} as any
    );

    expect(strategy).toBeInstanceOf(RedGreenRefactorCommitConventionStrategy);
  });
});
