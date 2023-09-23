import * as yup from 'yup';

const schema = (url, links) => yup
  .string()
  .url('invalid')
  .required('')
  .notOneOf(links, 'not-uniq')
  .validate(url);

export default (state) => {
  console.log(state);
  const links = state.feeds.map(({ link }) => link);
  const url = state.form.inputValue;
  const { form } = state;
  schema(url, links)
    .then(() => {
      form.error = null;
      form.valid = true;
    })
    .catch((err) => {
      form.error = err.errors.toString();
      form.valid = false;
    });
};
