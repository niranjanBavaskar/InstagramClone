import React from "react";
import styles from "./createPost.module.css";

export const CreatePost = () => {
  return (
    <div className={styles.main}>
      <div className={styles.postModal}>
        <div className={styles.header}>Create new post</div>
        <div className={styles.userPost}>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABeAIsDASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAUGAQMEAv/EAEAQAAEDAgMDBgsGBQUAAAAAAAEAAgMEBQYREiExURNBUmGRwRQVIjIzcoGhsdHwJEJjcaLhFiNTYrIlZIKDkv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCy0jgFpq6mCipn1FS5rI2DMkrepq+N8Y4it1sefs4aZ5G8zt+QPZ70GWXm63Hy7Ta2CA+bLUOyDuvLMd696MTv57bH7HfunNXVU9vpHTzuEcMY5h2ABJ48Vwcow1NHV0sEnmTSx5NP17UB4HiR3nXCjZ6sWfxCz4qvj/SXtrfVpm/snwIIBBzB3ELKBB4huDvSX2oPqxhvesjDkhPl3m5H1Zsk+QgnpbFcKbOW3XepfIN0dS7W13V9BdlluvjASwVMIgrac6ZY+8dSapBXM8HxfbZm7PCIpI39ekZj4jsQPtI4BGkcAsoQY0jgEaRwCyhBjSOARpHALKEGNI4BGkcAsoQCnKnyMdUh6dKR/l8lRqduXkYxtL+lG9vud80GzF0T3W6GYRmWKnnbJKwc7Bnn8VzX2+26ts0lPTSeETVADY4mtOYOfOObJU5GYyK5oqCjgl5WGkgjk6bIwD25IMWyGSntlLDMc5I4mtd+YC6kIQCn6usrLtc5LdbZuQggGVRUAZnPot6/39r9xDWkncBmkWDY8rG2Y+fPI97jxOeXcgw3B9ryzl5eV53vfKc/cg4QtwcHMkqo3DcWy7R7k/QgQ/wwG+iu1yZ/3/ssfw/Wt9Hfq0esdXen6ECDxNeWejv7z60A+ax4DiRnmXaB/rwgfAKgQgnBerhapmMvtOzkHnIVMGZAPWFRNIc0OaQQRmCOdaqumjraWWnnGccjdJSfB08ktmMUpJNPK6IZ8Bke9A+QhCAU9ffIxDY38Xvb8PmqFT+JPJuFlk4VQb25IKBC8yPbFG58jg1jRmXE7AFOPxHWyNfV0VtM1vjcQZC7JzgN5A4IKVC5rfX09ypm1FK/Uw7xztPArpQaK12iiqH9GNx9yX4Vbow7Rj+0ntcSk1/uE12jq4KFxbQ0rC6aYbpHDc0dWaf4fbosVCPwWntGaBipqoikvmIKqilqJYqOkY3yInadbiM8yqVT9h8u/XyT8VjezNBpfDdcPuMlM6S42/e6J5zkjHUef62c6c2y60l1h5SlkzI85h2Ob+YXaktyw/HUTeGUEhoq4bRIzYHesPr2oHSFP0l+lpZ20V9i8GnOxkw9HJ7eb63KgQCn8GbbVM/+pUvd8E+kdojc7gCUkwY3Th6E9Jzz+ojuQPUIQgEgxYNMVuk6FbH3/JP0hxnAZrDI5oz5J7XkdW7vQc8sr8T1jqanc5lqgd/OkGzlndEdX1wVHFEyGJsUTAyNgya0DYAue1NpmW2nFCAKcsBYB39fFdaCcr7VU2yrNysjdp2z0o82QdQ4/XUtVRdKq/llBboZqZrx9pmkblybecDr+uKqEIEN8pYbbhOpp6ZuiNjABxObhtPWmdqbotVG3owMH6Ql2MXacO1I6RYP1A9ycU7dFNEzosA9yDYp/DPlVl5k6VY4dhPzVAp/CHlUte8+c6skJ7AgoELguV5obW37VMA/mjbtefYlnLXu9egZ4rpD994zlcOoc31tQbsU1dCy1z09SWPnkblFFvdq5jlzLvs8c0VppI6nPlWxNDgd42bitNtsVFbncoxhlqDtM0p1PJ7kzQc9e7RQVLujE4+4rgwq3Rh2jH9rj2uJXVenaLNXO/27/wDErXh9uixUI/Bae3agYoQhALy9jZGOY9oc1wyIO4hekIJoW26WOZxs+mqo3uLjTSOALD1EraLzejsFhdq5yZhl8FQIQT/jDEb/ADbPCz1pwe9HL4ofupaCP83E96oEIIrEfjsW3/Un0fg75GtIiz1A7+5WqXX63m52manZlymWqPPpDd8vatFivUVdA2Cd4jroxplidsOY2ZhA4SKqw681Us9uuE1CZjnK1gza48RtGRT1CBXbbBQ253KNYZqg7TNKdTs+rgmiEIBCEIFmI3abDWn8Ijt2LotTdFpom9GBg/SEqxhVZW5tDD5VRVvaxrBvyz3/AACewx8lDHH0GhvYEHtCEIBCEIBCEIBCEIBK7nh+33N/KTxFsv8AUjOl3t4pohBPDDMsYygvNwjA3DlM/ks+Ibm30eIKj/lHq71QIQT/AIsxAz0d7Y71oB+6PBsTs82vopPWYR8GqgQgn9WKY/uW+X/1+y8umxTL5Daaihz+/qzy95+CokIEtqsJpqk11wqDWVpGQe4bGfknSEIBCEIP/9k="
            alt=""
          />
          <p>Drag photos and videos here</p>
          <button>Select from computer</button>
        </div>
      </div>
    </div>
  );
};
