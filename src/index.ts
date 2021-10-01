// Refer to: https://github.com/microsoft/BotBuilder-Samples/blob/main/experimental/adaptive-runtime-packages/multiply-dialog-package/src/index.ts

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { BotComponent } from "botbuilder";
import { LogToConsolDialog } from "./logToConsole";

import { ComponentDeclarativeTypes } from "botbuilder-dialogs-declarative";

import {
  ServiceCollection,
  Configuration,
} from "botbuilder-dialogs-adaptive-runtime-core";

export default class LogToConsolDialogBotComponent extends BotComponent {
  configureServices(
    services: ServiceCollection,
    _configuration: Configuration
  ): void {
    services.composeFactory<ComponentDeclarativeTypes[]>(
      "declarativeTypes",
      (declarativeTypes) =>
        declarativeTypes.concat({
          getDeclarativeTypes() {
            return [
              {
                kind: LogToConsolDialog.$kind,
                type: LogToConsolDialog,
              },
            ];
          },
        })
    );
  }
}
