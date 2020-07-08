function getCount() {
  let url = 'https://heather-sprout-mirror.glitch.me/';

  fetch(url)
  .then(res => res.json())
  .then((out) => {



$(".users").each(function () {
  var $this = $(this),
    countTo = out.memberCount

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo
    },

    {
      duration: 4000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    }
  );
});

$(".channels").each(function () {
  var $this = $(this),
    countTo = out.channelCount

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo
    },

    {
      duration: 4000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    }
  );
});

$(".servers").each(function () {
  var $this = $(this),
    countTo = out.servercount

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo
    },

    {
      duration: 4000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    }
  );
});



  })
  .catch(err => { throw err });



  



  setInterval(function() {
    let url = 'https://heather-sprout-mirror.glitch.me/';
  
    fetch(url)
    .then(res => res.json())
    .then((out) => {
  
  
      document.getElementById('servers').innerHTML = out.servercount
      document.getElementById('channels').innerHTML = out.channelCount
       document.getElementById('users').innerHTML = out.memberCount
    })
    .catch(err => { throw err });
  }, 30000)




}