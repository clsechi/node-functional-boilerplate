const { Ok, Err } = require('crocks/Result');
const { validate } = require('superstruct');

const mapStructError = ({
  failures,
}) => [...failures()]
  .map(({ path, value, type }) => `"${path}" with ${value} is invalid, expected type is: ${type}`);

const validateDomain = (struct) => (domainData) => {
  const [error, value] = validate(domainData, struct);
  return error ? Err(mapStructError(error)) : Ok(value);
};


module.exports = validateDomain;
