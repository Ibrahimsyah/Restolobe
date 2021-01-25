class LikeButton extends HTMLElement {
  set liked(liked) {
    this._liked = liked;
    this.render();
  }

  get liked() {
    return this._liked;
  }

  render() {
    const liked = this._liked;
    const aria = !liked ?
    'add restaurant to favorite' : 'remove restaurant from favorite';
    this.innerHTML = `
    <button aria-label="${aria}" id="likeButton">
      <i class="fa ${liked ? 'fa-heart' : 'fa-heart-o'}" aria-hidden="true"></i>
    </button>
    `;
  }
}

customElements.define('like-button', LikeButton);
