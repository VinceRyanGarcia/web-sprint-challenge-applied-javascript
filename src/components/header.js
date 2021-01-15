const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  const header = document.createElement('div')
  //    <span class="date">{ date }</span>
  const headerDate = document.createElement('span')
  //    <h1>{ title }</h1>
  const headerTitle = document.createElement('h1')
  //    <span class="temp">{ temp }</span>
  const headerTemp = document.createElement('span')
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
header.appendChild(headerDate)
header.appendChild(headerTitle)
header.appendChild(headerTemp)

}

export { Header, headerAppender }
