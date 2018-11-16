
// import './third-pard-style/semantic-ui-css/semantic.min.css';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

