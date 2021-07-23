const { v1:uuid } = require("uuid");
const { Nodes } = require("@flowbuild/workflow-engine");

const SystemTaskNode = Nodes.SystemTaskNode;

class JsTestTaskNode extends SystemTaskNode {
  _run(execution_data, lisp) {
    const n_js = execution_data.n_js;
    let uuids = [];
    for(let i = 0; i<n_js; i++){
      uuids.push(uuid());
    }
    const result = {uuids: uuids};
    return [result, "running"];
  }
}

module.exports = {
  JsTestTask: JsTestTaskNode
};
