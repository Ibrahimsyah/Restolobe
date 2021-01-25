export default {
  _getUrl: () => window.location.hash.slice(1).toLowerCase(),

  _urlCombiner: (splitedUrl) => {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
    (splitedUrl.id ? '/:id' : '') +
    (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },

  _urlSplitter: (url) => {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  parseWithCombiner() {
    const url = this._getUrl();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseWithoutCombiner() {
    const url = this._getUrl();
    return this._urlSplitter(url);
  },
};
