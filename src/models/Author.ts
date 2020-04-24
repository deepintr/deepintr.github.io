const platformMap: { [key: string]: string } = {
  github: "https://github.com",
  telegram: "https://t.me",
};

export interface IAuthor {
  username: string;
  url: string;
}

export class Author {
  private username: string;
  private platform: string;

  constructor(authorText: string) {
    [this.username, this.platform] = authorText
      .split("@")
      .map((s) => s.toLowerCase());
  }

  /**
   * Returns credentials of the author.
   */
  getCredentials(): IAuthor {
    const { username, platform } = this;
    if (platform in platformMap) {
      const url = `${platformMap[platform]}/${username}`;
      return {
        username,
        url,
      };
    }

    return {
      username,
      url: "#",
    };
  }
}
