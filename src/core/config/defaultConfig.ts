import { Config } from "./types";

export const defaultConfig = {
  version: "0.0.1",
  wizard: {
    maxViewFilesToShow: 5,
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
        { value: "feat", label: "feat: A new feature" },
        { value: "fix", label: "fix: A bug fix" },
        { value: "docs", label: "docs: Documentation only changes" },
        {
          value: "style",
          label: "style: Changes that do not affect the meaning of the code",
        },
        {
          value: "refactor",
          label:
            "refactor: A code change that neither fixes a bug nor adds a feature",
        },
        {
          value: "perf",
          label: "perf: A code change that improves performance",
        },
        {
          value: "test",
          label: "test: Adding missing tests or correcting existing tests",
        },
        {
          value: "ci",
          label: "ci: Changes to our CI configuration files and scripts",
        },
        {
          value: "chore",
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
      },
      templateOrder: ["type", "subject"],
    },
    cliOptions: {
      types: [
        {
          value: "RED",
          label: "RED: Write a test that fails",
        },
        {
          value: "GREEN",
          label: "GREEN: Make the test pass",
        },
        {
          value: "REFACTOR",
          label: "REFACTOR: Refactor the code without changing functionality",
        },
      ],
      redPatterns: [
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
      greenPatterns: [
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
      refactorPatterns: [
        "Refactor {{feature}} to improve {{performance/maintainability/readability/usability}}",
        "Restructure {{feature}} to {{simplify/consolidate/clarify}}",
        "Reorganize {{feature}} to {{streamline/improve}}",
        "Simplify {{feature}} by {{removing unnecessary code/logic}}",
        "Optimize {{feature}} by {{reducing complexity/improving efficiency}}",
        "Improve {{feature}} by {{cleaning up/rewriting}} code for {{clarity/consistency}}",
      ],
      groupOptions: [
        {
          value: "{{fixing/adding/removing}}",
          options: [
            {
              value: "fixing",
              label: "fixing",
            },
            {
              value: "adding",
              label: "adding",
            },
            {
              value: "removing",
              label: "removing",
            },
          ],
        },
        {
          value: "{{performance/maintainability/readability/usability}}",
          options: [
            {
              value: "performance",
              label: "performance",
            },
            {
              value: "maintainability",
              label: "maintainability",
            },
          ],
        },
        {
          value: "{{simplify/consolidate/clarify}}",
          options: [
            {
              value: "simplify",
              label: "simplify",
            },
            {
              value: "consolidate",
              label: "consolidate",
            },
            {
              value: "clarify",
              label: "clarify",
            },
          ],
        },
        {
          value: "{{streamline/improve}}",
          options: [
            {
              value: "streamline",
              label: "streamline",
            },
            {
              value: "improve",
              label: "improve",
            },
          ],
        },
        {
          value: "{{removing unnecessary code/logic}}",
          options: [
            {
              value: "removing unnecessary code",
              label: "removing unnecessary code",
            },
            {
              value: "removing unnecessary logic",
              label: "removing unnecessary logic",
            },
          ],
        },
        {
          value: "{{reducing complexity/improving efficiency}}",
          options: [
            {
              value: "reducing complexity",
              label: "reducing complexity",
            },
            {
              value: "improving efficiency",
              label: "improving efficiency",
            },
          ],
        },
        {
          value: "{{cleaning up/rewriting}}",
          options: [
            {
              value: "cleaning up",
              label: "cleaning up",
            },
            {
              value: "rewriting",
              label: "rewriting",
            },
          ],
        },
        {
          value: "{{clarity/consistency}}",
          options: [
            {
              value: "clarity",
              label: "clarity",
            },
            {
              value: "consistency",
              label: "consistency",
            },
          ],
        },
      ],
    },
  },
} satisfies Config;
