import Joi from '@hapi/joi';
import { useCallback, useMemo, useState } from 'react';
import { createJoiResolver } from 'utils/form';

/**
 * Transform Joi schema keys to resolver that used in React Hook Form
 * @param {*} schemaKeys An object with each key is a Joi schema type
 */
const useValidationResolver = (initKeys = {}, initMessages = {}) => {
  const [schemaKeys, setSchemaKeys] = useState(initKeys);
  const [schemaMessages, setSchemaMessages] = useState(initMessages);

  const validationSchema = useMemo(() => {
    return Joi.object(schemaKeys)
      .unknown(true)
      .messages({
        'string.empty': 'This field is required',
        'any.required': 'This field is required',
        ...schemaMessages,
      });
  }, [schemaKeys, schemaMessages]);

  const validationResolver: any = useCallback(createJoiResolver, []);

  const appendSchema = (keys: any) => {
    setSchemaKeys((prevSchema) => ({
      ...prevSchema,
      ...keys,
    }));
  };

  const appendMessages = (messages: any) => {
    setSchemaMessages((prevMessages) => ({
      ...prevMessages,
      ...messages,
    }));
  };

  return {
    appendSchema,
    appendMessages,
    validationSchema,
    validationResolver,
  };
};

export default useValidationResolver;
