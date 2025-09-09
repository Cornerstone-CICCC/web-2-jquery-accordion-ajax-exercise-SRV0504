$(function() {
  $(".accordion-header").on("click", function () {
    $(".accordion-content").slideUp();
    $(this).next(".accordion-content").slideDown();
  });

  $(".todos button").on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function (data) {
        const todos = data.todos;
        const ul = $(".todos ul");
        ul.empty(); 
        todos.forEach(todo => {
          ul.append(`<li>${todo.todo}</li>`);
        });
      },
      error: function () {
        alert("Error al cargar los datos.");
      }
    });
  });
});
