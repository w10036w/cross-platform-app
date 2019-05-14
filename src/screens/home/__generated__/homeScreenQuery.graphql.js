/**
 * @flow
 * @relayHash 24c66e2ef3485adeb978d3a90905d681
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type homeScreenQueryVariables = {||};
export type homeScreenQueryResponse = {|
  +todo: ?{|
    +id: string,
    +title: string,
  |}
|};
export type homeScreenQuery = {|
  variables: homeScreenQueryVariables,
  response: homeScreenQueryResponse,
|};
*/


/*
query homeScreenQuery {
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
    "name": "homeScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "homeScreenQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "homeScreenQuery",
    "id": null,
    "text": "query homeScreenQuery {\n  todo(id: 1) {\n    id\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b06cab1d36f41cf040a8f60a722ccbbf';
module.exports = node;
