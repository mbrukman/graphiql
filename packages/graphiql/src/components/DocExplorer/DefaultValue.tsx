/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { astFromValue, print, ValueNode } from 'graphql';
import { FieldType } from './types';

const printDefault = (ast?: ValueNode | null): string => {
  if (!ast) {
    return '';
  }
  return print(ast);
};

type DefaultValueProps = {
  field: FieldType;
};

export default function DefaultValue({ field }: DefaultValueProps) {
  if ('defaultValue' in field) {
    return (
      <span>
        {' = '}
        <span className="arg-default-value">
          {printDefault(astFromValue(field.defaultValue, field.type))}
        </span>
      </span>
    );
  }

  return null;
}
