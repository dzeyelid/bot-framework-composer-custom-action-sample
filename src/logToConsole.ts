// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import {
  Expression,
  StringExpression,
  StringExpressionConverter,
} from "adaptive-expressions";

import {
  Converter,
  ConverterFactory,
  Dialog,
  DialogConfiguration,
  DialogContext,
  DialogTurnResult,
} from "botbuilder-dialogs";

export interface LogToConsolDialogConfiguration extends DialogConfiguration {
  message: string | Expression | StringExpression;
}

export class LogToConsolDialog
  extends Dialog
  implements LogToConsolDialogConfiguration {
  public static $kind = "BotbuilderSamples.LogToConsolDialog";

  public message: StringExpression = new StringExpression();

  public getConverter(
    property: keyof LogToConsolDialogConfiguration
  ): Converter | ConverterFactory {
    switch (property) {
      case "message":
        return new StringExpressionConverter();
      default:
        return super.getConverter(property);
    }
  }

  public beginDialog(dc: DialogContext): Promise<DialogTurnResult> {
    const message = this.message.getValue(dc.state);
    console.log(message);
    return dc.endDialog();
  }

  protected onComputeId(): string {
    return "BotbuilderSamples.LogToConsolDialog";
  }
}
