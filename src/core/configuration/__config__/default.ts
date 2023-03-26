import { Configuration } from "../types";

export const defaultConfig = {
  version: "0.0.1",
  settings: {
    maxViewFilesToShow: 5,
    excludePaths: [
      "package-lock.json",
      "yarn.lock",
      "yarn-error.log",
      "pnpm-lock.yaml",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",
      "**/package-lock.json",
      "**/yarn-error.log",
      "**/yarn.lock.*",
      "**/yarn.lock/*.log",
      "**/.yarn/cache",
    ],
  },
  conventional: {
    commitOptions: {
      template: {
        type: "{{type}}",
        scope: "({{scope}})",
        subject: ": {{subject}}",
        body: "\n\n{{body}}",
        footer: "\n\n{{footer}}",
        breaking: "\n\nBREAKING CHANGE:\n {{breaking}}",
        refs: "\n\nRefs: {{refs}}",
      },
      templateOrder: [
        "type",
        "scope",
        "subject",
        "body",
        "breaking",
        "footer",
        "refs",
      ],
    },
    cliOptions: {
      types: [
        { value: ":sparkles:", label: "feat: A new feature" },
        { value: ":bug:", label: "fix: A bug fix" },
        { value: ":books:", label: "docs: Documentation only changes" },
        {
          value: ":gem:",
          label: "style: Changes that do not affect the meaning of the code",
        },
        {
          value: ":hammer:",
          label:
            "refactor: A code change that neither fixes a bug nor adds a feature",
        },
        {
          value: ":rocket:",
          label: "perf: A code change that improves performance",
        },
        {
          value: ":rotating_light:",
          label: "test: Adding missing tests or correcting existing tests",
        },
        {
          value: ":construction_worker:",
          label: "ci: Changes to our CI configuration files and scripts",
        },
        {
          value: ":wrench:",
          label:
            "chore: Changes to the build process or auxiliary tools and libraries",
        },
      ],
    },
  },
  redGreenRefactor: {
    commitOptions: {
      template: {
        type: "[{{type}}]: ",
        subject: "{{subject}}",
        body: "\n\n{{body}}",
      },
      templateOrder: ["type", "subject", "body"],
    },
    cliOptions: {
      types: [
        {
          value: ":red_circle:",
          label: "RED: Write a test that fails",
          patterns: [
            "Add failing test for {{feature}}",
            "Write failing test for {{feature}}",
            "Create failing test for {{feature}}",
            "Implement failing test for {{feature}}",
            "Introduce failing test for {{feature}}",
            "Start failing test for {{feature}}",
            "Begin failing test for {{feature}}",
            "Initiate failing test for {{feature}}",
            "Setup failing test for {{feature}}",
          ],
        },
        {
          value: ":green_circle:",
          label: "GREEN: Make the test pass",
          patterns: [
            "Make test pass for {{feature}}",
            "Fix failing test for {{feature}}",
            "Implement solution for {{feature}}",
            "Add code to pass test for {{feature}}",
            "Introduce passing test for {{feature}}",
            "Start passing test for {{feature}}",
            "Begin passing test for {{feature}}",
            "Initiate passing test for {{feature}}",
            "Setup passing test for {{feature}}",
          ],
        },
        {
          value: ":blue_circle:",
          label: "REFACTOR: Refactor the code without changing functionality",
          patterns: [
            "Refactor {{feature}} to improve {{performance/maintainability/readability/usability}}",
            "Restructure {{feature}} to {{simplify/consolidate/clarify}}",
            "Extract {{feature}} to {{separate file/module}}",
            "Inline {{feature}}",
            "Rename {{feature}} to {{new name}}",
            "Move {{feature}} to {{new location}}",
            "Reorganize {{feature}} to {{streamline/improve}}",
            "Simplify {{feature}} by {{removing unnecessary code/logic}}",
            "Optimize {{feature}} by {{reducing complexity/improving efficiency}}",
            "Improve {{feature}} by {{cleaning up/rewriting}} code for {{clarity/consistency}}",
          ],
        },
      ],
    },
  },
} satisfies Configuration;
