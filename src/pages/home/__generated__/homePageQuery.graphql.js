/**
 * @flow
 * @relayHash e81e5569b9be18ff35ea6e9c1443b02e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type homePageQueryVariables = {||};
export type homePageQueryResponse = {|
  +todo: ?{|
    +id: string,
    +title: string,
  |}
|};
export type homePageQuery = {|
  variables: homePageQueryVariables,
  response: homePageQueryResponse,
|};
*/


/*
query homePageQuery {
  todo(id: 1) {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "todo",
    "storageKey": "todo(id:1)",
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": 1
      }
    ],
    "concreteType": "Todo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "homePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "homePageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "homePageQuery",
    "id": null,
    "text": "query homePageQuery {\n  todo(id: 1) {\n    id\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0175f10b0bb061e1bb5fab5fb4b91be6';
module.exports = node;
