const zenhubapi = {
  boardData: function(){
    const access_token = 'bb591f85364c778b2cfef0bf7903586d73460584c3035b69369bac86792fc9f183eaa6251a761e9b';
    const request = fetch('https://api.zenhub.io/p1/repositories/81836367/board?access_token=' + access_token)
      .then(rawResponse => rawResponse.json())
      .then(data => {
        const issues = [];
        data.pipelines.map(pipeline => {
          const stage = pipeline.name;
          pipeline.issues.map(issue => {
            issue.stage = stage
            issues.push({
              number: issue.issue_number,
              stage: issue.stage
            })
          })
        })
        return issues
      })
      return request
  }
}







export default zenhubapi
