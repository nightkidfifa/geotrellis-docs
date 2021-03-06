/**
 * Copyright (c) 2017-present, Azavea, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
            GeoTrellis
          </a>
          <div>

          </div>
          <div>
            <h5>Community</h5>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/locationtech/geotrellis/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            <a
              href={this.props.config.gitterUrl}
              target="_blank"
              rel="noreferrer noopener">
              Gitter.im
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://projects.eclipse.org/projects/locationtech">LocationTech</a>
            <a href={`${this.props.config.blogUrl}`}>Blog</a>
          </div>
        </section>

        <section className="copyright">
          <a href="https://azavea.com/terms-of-use/">Terms of Use</a>
          <span className="separator">&middot;</span>
          <a href="https://azavea.com/privacy-policy/">Privacy Policy</a>
          <span className="separator">&middot;</span>
          {this.props.config.copyright}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
