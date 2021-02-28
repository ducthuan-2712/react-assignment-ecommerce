/**
 * Create a resolver that support Joi valivation
 * @param {object} data form values
 * @param {object} context Need to have a key named validationSchema that hold a list of joi schema keys
 */
export const createJoiResolver = (data, context) => {
  if (!context || !context.validationSchema) {
    return {
      values: {},
      errors: {},
    };
  }

  const { error, value: values } = context.validationSchema.validate(data, {
    abortEarly: false,
  });

  const errors = error
    ? error.details.reduce((previous, currentError) => {
        return {
          ...previous,
          [currentError.path[0]]: currentError,
        };
      }, {})
    : {};

  return {
    values: error ? {} : values,
    errors: errors,
  };
};
