const githubapi = {
  issuesRequest: function(){
    const request = fetch('https://api.github.com/repos/StreamlinedStudio/FamilyChallenge/issues')
      .then(rawResponse => rawResponse.json())
      .then(data => {
        return data
      })
      return request
  },
  samplePost: function(){
    const request = fetch('https://api.github.com/repos/StreamlinedStudio/FamilyChallenge/issues?client_id=20adbac6668bf8874b4d&client_secret=db87cc50f4621bb589a4f2f3a66f55f116217d66', {
      method: 'post',
      body: {
        title: 'Hello',
        body: 'what'
      }
    })
      .then(rawResponse => rawResponse.json())
      .then(data => {
        return data
      })
      return request
  },
  milestonesRequest: function(){
    const request = fetch('https://api.github.com/repos/StreamlinedStudio/FamilyChallenge/milestones')
      .then(rawResponse => rawResponse.json())
      .then(data => {
        return data
      })
      return request

  }
}



export default githubapi
