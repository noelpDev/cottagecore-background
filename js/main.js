const ov1Image = document.querySelector('#overlay1')
const ov2Image = document.querySelector('#overlay2')
const ssVideo = document.querySelector('#ssVideo')
const spVideo = document.querySelector('#spVideo')
const seVideo = document.querySelector('#seVideo')

document.querySelector('#cc').addEventListener('click', cottagecore)
document.querySelector('#ov1').addEventListener('click', overlay1)
document.querySelector('#ov2').addEventListener('click', overlay2)
document.querySelector('#ss').addEventListener('click', streamStart)
document.querySelector('#sp').addEventListener('click', streamPause)
document.querySelector('#se').addEventListener('click', streamEnd)

function cottagecore(){
  ov1Image.classList.add('hidden')
  ov2Image.classList.add('hidden')
  ssVideo.classList.add('hidden')
  spVideo.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  spVideo.pause()
  seVideo.pause()
}

function overlay1(){
  ov2Image.classList.add('hidden')
  ssVideo.classList.add('hidden')
  spVideo.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  spVideo.pause()
  seVideo.pause()

  ov1Image.classList.toggle('hidden')
}

function overlay2(){
  ov1Image.classList.add('hidden')
  ssVideo.classList.add('hidden')
  spVideo.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  spVideo.pause()
  seVideo.pause()

  ov2Image.classList.toggle('hidden')
}

function streamStart(){
  ov1Image.classList.add('hidden')
  ov2Image.classList.add('hidden')
  spVideo.classList.add('hidden')
  seVideo.classList.add('hidden')

  spVideo.pause()
  seVideo.pause()

  ssVideo.classList.toggle('hidden')
  ssVideo.play();
}

function streamPause(){
  ov1Image.classList.add('hidden')
  ov2Image.classList.add('hidden')
  ssVideo.classList.add('hidden')
  seVideo.classList.add('hidden')

  ssVideo.pause()
  seVideo.pause()

  spVideo.classList.toggle('hidden')
  spVideo.play()
}

function streamEnd(){
  ov1Image.classList.add('hidden')
  ov2Image.classList.add('hidden')
  ssVideo.classList.add('hidden')
  spVideo.classList.add('hidden')

  ssVideo.pause()
  spVideo.pause()

  seVideo.classList.toggle('hidden')
  seVideo.play()
}