import {
  Listener,
  PieceContext,
  ListenerOptions,
  CommandAcceptedPayload
} from '@sapphire/framework';

export class AcceptedListener extends Listener {
  public constructor(context: PieceContext, options: ListenerOptions) {
    super(context, {
      ...options,
      event: 'commandAccepted'
    });
  }

  public run({ message, command }: CommandAcceptedPayload) {
    this.container.log.info(
      `${message.author.tag} (${message.author.id}) used command '${command.name}'.`
    );
  }
}
