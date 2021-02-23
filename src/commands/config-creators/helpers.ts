export class ConfigCreator {
  title: string;
  cmdName: string;
  config: string;

  constructor(title: string, config: Record<string, any>) {
    this.title = `Create ${title} Configuration File`;
    this.cmdName = `create${title}ConfigFile`;
    this.config = JSON.stringify(config);
  }

  async handler(): Promise<void> {
    console.log(this.config);
  }
}
