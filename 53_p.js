// Define event bubbling?

// JavaScript allows DOM elements to be nested inside each other.
// In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.

<div>
  Parent
  <div>
    Child
    <div onclick="getClicked()">GrandChild</div>
  </div>
</div>;
