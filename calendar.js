
import { calendarData } from './calendar-data.js';

class Calendar {
  constructor(options) {
    this.destination = options.destination;
    if (!this.destination) {
      console.error('No destination element found');
      return;
    }
    this.zIndex = 1
    this.currentDate = new Date();
    this.currentSchoolyearStart = 2024
    this.currentSchoolyearEnd = 2025

    this.firstYear = calendarData[this.currentSchoolyearStart];
    // this.secondYear = calendarData[currentSchoolyearEnd];
    this.init()
  }
  init() {
    if (this.firstYear) {
      this.firstYear.forEach((month) => {
        const monthDays = this.getAllDaysInMonth(month.month_nr, this.currentDate.getFullYear());
        console.log(monthDays);
        const monthEvents = this.createEvents( month, this.currentSchoolyearStart);
        this.createMonth = this.createElements(this.currentSchoolyearStart, monthDays, month, monthEvents)
        this.checkSummaries()
      })
    }
  }
  createEvents(month, year) {
    const events = [];
    if (!month.days) return;
    month.days.forEach(day => {
      if (day.events) {
        const eventElement = document.createElement('div')
        eventElement.classList.add('event')
        day.events.forEach(event => {
          let tags = ''
          let classString = ''
          if (event.tags) {
            event.tags.forEach(tag => {
              tags += `<span class="event__tag font-bold">${tag}</span>`
              classString += 'is-' + tag.toLowerCase() + ' '
            })
          }
          let dayStart = day.day
          let dayEnd = day.day
          let dateStart = `${dayStart}-${month.month_nr}`
          let dateEnd = `${dayEnd}-${month.month_nr}`
          
          if (day.span) {
            let start = new Date(day.start_day)
            let end = new Date(day.end_day)
            dayStart = start.getDate();
            dayEnd = end.getDate();
            classString += 'is-span'
            dateStart = `${dayStart}-${end.getMonth() + 1}`
            dateEnd = `${dayEnd}-${end.getMonth() + 1}`
          }

          const newEvent = `
            <details class="event ${classString}" style="--start: day-${dateStart}; --end: day-${dateEnd}">
              <summary class="event__icon xsmall-body font-bold">
                <span class="open">${event.icon ? event.icon : '🗓️'} ${event.title}</span>
              </summary>
              <div class="event__content">
                <p class="event__icon caps xsmall-body font-bold">
                  <span>${event.icon ? event.icon : '🗓️'}</span><span class="event__name">${event.title}</span>
                </p>
                <time class="large-body caps" datetime="${year}-${month.month_nr}-${dayStart}">${dayStart} ${month.month}</time>
                ${dayEnd ? `- <time class="large-body caps" datetime="${year}-${month.month_nr}-${dayEnd}">${dayEnd} ${month.month}</time>` : ''}
                <h3 class="event__title large-body">${event.title}</h3>
                <p class="event__description">${event.description}</p>
                <div class="event__tags xsmall-body caps">
                  ${tags}
                </div>
              </div>
            </details>
          `
          if (day.day) {
            if (!events[day.day]) {
              events[day.day] = newEvent
            } else {
              events[day.day] += newEvent
            }
          } else {
            if (!events['spans']) {
              events['spans'] = newEvent
            } else {
              events['spans'] += newEvent
            }
          }
        })
      }
    })
    return events
  }
  getWeek(date, year) {
    let onejan = new Date(year, 0, 1);
    let sundayMinus = date.getDay() == 0 ? 1 : 0
    return Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7) - sundayMinus;
  }
  createElements(year, allDays, month, events) {
    const monthElement = document.createElement('div');
    monthElement.classList.add('calendar-item');
    monthElement.dataset.month = month.month.toLowerCase();
    let spans = events.spans;
    let dayString = '';
    let gridTemplateArea = '';
    let currentWeek = 53
    allDays.forEach((day, i) => {
      if (this.getWeek(day, year) != currentWeek) {
        currentWeek = this.getWeek(day, year)
          gridTemplateArea += `'monday-${currentWeek} tuesday-${currentWeek} wednesday-${currentWeek} thursday-${currentWeek} friday-${currentWeek} saturday-${currentWeek} sunday-${currentWeek}' `
      }
    })


    monthElement.innerHTML = `
      <h2 class="calendar-item__month medium-heading">${month.month}</h2>
      <div class="calendar-item__days" style="--grid-template-areas: ${gridTemplateArea}">
        ${allDays.map((day) => {
          switch (day.getDay()) {
            case 0:
              dayString = 'sunday';
              break;
            case 1:
              dayString = 'monday';
              break;
            case 2:
              dayString = 'tuesday';
              break;
            case 3:
              dayString = 'wednesday';
              break;
            case 4:
              dayString = 'thursday';
              break;
            case 5:
              dayString = 'friday';
              break;
            case 6:
              dayString = 'saturday';
              break;
          }
      return `
            <div class="calendar-item__day is-${dayString}" style="--area: ${dayString}-${this.getWeek(day, day.getFullYear())}">
              <span class="font-bold day" aria-hidden="true">
                ${day.getDate()}
              </span>
              <div class="events" id="${day.getDate()}-${month.month_nr}">
                 ${events[day.getDate()] ? events[day.getDate()] : ''}
              </div> 
              </div>
          `
    }).join('')}
      ${spans}
      </div>
    `;
    this.destination.appendChild(monthElement);
  }
  checkSummaries() {
    
    const details = document.querySelectorAll('.events details');
    details.forEach(detail => {
      detail.querySelector('summary').addEventListener('click', () => {
        details.forEach(det => {
          if(detail != det) {
            det.removeAttribute('open')
          }
        })
      })
    })
  }
  getAllDaysInMonth(month, year) {
    return Array.from(
      { length: new Date(year, month, 0).getDate() },
      (_, i) => new Date(year, month - 1, i + 1)
    )
  }
}

if (calendarData && calendarData) {
  const calendarDestination = document.querySelector('.js-calendar-destination');
  new Calendar({
    destination: calendarDestination
  });
}