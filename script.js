// ADD ANIMATIONS

// CHANGE SHIFT() TO SOMETHING THAT DOESN"T REMOVE STRINGS, make gameplay eternal

// MAKE RESPONSIVE

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
    const copy = [...src]
  
    const length = copy.length
    for (let i = 0; i < length; i++) {
      const x = copy[i]
      const y = Math.floor(Math.random() * length)
      const z = copy[y]
      copy[i] = z
      copy[y] = x
    }
  
    if (typeof src === 'string') {
      return copy.join('')
    }
  
    return copy
  }

// ANSWERS
const answers = ['MAYBE', 'NEVER', 'POSSIBLY', 'DEFINITELY', 'SURE', 'NOPE', 'I GUESS?', 'TRY AGAIN', 'YES']

const shuffledAnswers = shuffle(answers)


// VUE APP
const app = new Vue ({
    el: '#app',
    data: {
      gameStatus: false,
      answers: shuffledAnswers,
      answer: '',
      question: ''
    },
    methods: {
        shakeAnimation: function () {
          const eightBall = document.querySelector('.eightBall')
          
          eightBall.classList.add('animate__animated', 'animate__wobble', 'animate__fast')

          eightBall.addEventListener('animationend', () => {
            eightBall.className = 'eightBall'
          })
        },
        fadeInAnimation: function () {
            const answerBit = document.querySelector('.answerBit')

            answerBit.classList.add('animate__animated', 'animate__fadeIn', 'animate__fast')

            answerBit.addEventListener('animationend', () => {
              answerBit.className = 'answerBit'
            })
        },
        clearInput: function () {
            this.question = ''
            event.target = ''
        },
        onEnter: function () {
            if (this.question.length > 0) {
              this.gameStatus = true
            }

            this.clearInput()
            this.shakeAnimation()
            this.fadeInAnimation()

            var tempArray = shuffle(this.answers)
            this.answer = tempArray[0]
            return this.answer
        }
    }
})

console.log(shuffledAnswers)