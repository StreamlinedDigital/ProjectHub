import GithubAPI from 'github-api';
import Zenhubapi from '../utils/zenhubapi';
import Showdown from 'showdown'

//Getting User Credentials from Local Storage



const githubapi = {
  issues: function(org, repo, auth){
    const issues = auth.getIssues(org + '/' + repo);
    return issues.listIssues()
    .then(({data: reposJson}) => {
      Zenhubapi.boardData().then(zenhubdata => {
        reposJson.map(gitissue => {
          zenhubdata.map(zenissue => {
            if(gitissue.number == zenissue.number){
                return gitissue.stage = zenissue.stage
            }
          })
        })
      })

      return reposJson
    })
  },
  readme: function(org, repo, auth){
    const readme = auth.getRepo(org, repo)
    return readme.getReadme()
      .then(({data: reposJson}) => {
          const converter = new Showdown.Converter()
          const content = converter.makeHtml(atob(reposJson.content))
          return content
    })

  },
  // notes: function(org, repo, auth){
  //   return fetch('https://api.github.com/repos/' + org + '/' + repo + '/contents/notes')
  //     .then(rawResponse => rawResponse.json())
  //     .then(notes => {
  //       notes.map(note => {
  //         const newNotes = fetch('https://api.github.com/repos/' + org + '/' + repo + '/contents/notes/' + note.name)
  //           .then(rawResponse => rawResponse.json())
  //           .then(individualNote => {
  //             return individualNote;
  //           })
  //         return newNotes.then(note => {
  //           return note
  //         })
  //
  //       })
  //       return notes
  //     })
  // },
  milestones: function(org, repo, auth){
    const milestones = auth.getIssues(org, repo)
    return milestones.listMilestones()
      .then(({data: reposJson}) => {
          return reposJson
    })



  }

}



export default githubapi
