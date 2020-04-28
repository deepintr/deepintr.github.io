const platformMap: { [key: string]: string } = {
  github: 'https://github.com',
  telegram: 'https://t.me',
  twitter: 'https://twitter.com',
  instagram: 'https://www.instagram.com',
  disqus: 'https://disqus.com/by',
};

export interface IAuthor {
  username: string;
  url: string;
}

export class Author {
  private readonly delimiter = '@';
  private username: string;
  private platform: string;

  constructor(authorText: string) {
    const str = authorText.trim().toLowerCase();
    if (str.includes(this.delimiter)) {
      [this.username, this.platform] = str.split(this.delimiter);
    } else {
      this.username = str;
      this.platform = '';
    }
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
      url: '#',
    };
  }
}
