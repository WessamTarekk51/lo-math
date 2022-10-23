import { Content } from '@angular/compiler/src/render3/r3_ast'
import { Component, ElementRef, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { jsonFile } from './typings'


@Component({
  selector: 'app-lo',
  templateUrl: './lo.component.html',
  styleUrls: ['./lo.component.css'],
})
export class LoComponent implements OnInit {
  inputvaldation: FormGroup
  index: any
  rightBox: any
  falseBox: any

  itemJson: jsonFile[] = [
    {
      items: [
        {
          id: 1,
          parag: 'ssssssssssss',
          content: [
            {
              input: {
                valid: ['1'],
              },
            },
            {
              input: {
                valid: ['2'],
              },
            },
            {
              input: {
                valid: ['3'],
              },
            }
          ],
        },
      ],
    },
  ]

  constructor(private elementRef: ElementRef) {
    this.inputvaldation = new FormGroup({
      value: new FormControl(),
    })
  }

  ngOnInit(): void {
    // console.log(this.itemJson)
  }
  handClick(event: any) {
    this.index = event.target.getAttribute('index')
    const trueValue = this.itemJson[0].items[0].content[this.index - 1].input
      .valid[0]
    let maxLength = trueValue.length
    event.target.setAttribute('maxlength',maxLength)
    event.target.classList.remove('false')

  }

  checkvalue(event: any){

    const trueValue = this.itemJson[0].items[0].content[this.index - 1].input
    .valid[0]
    let maxLength = trueValue.length
    if (event.target.value == '') {
      event.target.classList.remove('right')
      event.target.classList.add('wrong')
      console.log('the value null')
    } else if (event.target.value.length == maxLength) {
      if (event.target.value != trueValue) {
        event.target.classList.remove('right')
        event.target.classList.add('wrong')
        console.log('the value wrong')
      } else {
        event.target.classList.add('right')
        event.target.classList.remove('wrong')
        console.log('the value ture')

      }
    }
  }
  checkanswer() {
    this.rightBox = document.querySelectorAll('.right')
    this.rightBox.forEach((elem: any) => {
      elem.classList.add('true')
      elem.classList.remove('false')

    })
    this.falseBox = document.querySelectorAll('.wrong')
    this.falseBox.forEach((elem: any) => {
      elem.classList.add('false')
      elem.classList.remove('true')
    })
}
}
