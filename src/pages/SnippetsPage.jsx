import { Fragment } from "react"

import SnippetRCC from "../components/snippets/SnippetRCC"
import SnippetRCE from "../components/snippets/SnippetRCE"
import SnippetRFC from "../components/snippets/SnippetRFC"
import SnippetRFCE from "../components/snippets/SnippetRFCE"
import { SnippetRAFC } from "../components/snippets/SnippetRAFC"
import SnippetRAFCE from "../components/snippets/SnippetRAFCE"

function SnippetsPage() {
  return <Fragment>
    <SnippetRCC />
    <SnippetRCE />
    <SnippetRFC />
    <SnippetRFCE />
    <SnippetRAFC />
    <SnippetRAFCE />
  </Fragment>
}

export default SnippetsPage