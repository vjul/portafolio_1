$(function () {
  let proyectos = [
    { nombre: "Estudiar", descripcion: "Estudiar javascript" },
    { nombre: "Guitarra", descripcion: "Aprender a tocar guitarra" },
    { nombre: "Ahorrar", descripcion: "Ahorrar para compra de departamento" },
  ];

  function cargarProyectos() {
    let html = "";
    $.each(proyectos, function (index, val) {
      html += `<tr>           
            <td>${val.nombre}</td>
            <td>${val.descripcion}</td>
            <td><button type="button" class="btn btn-danger" data-index="${index}">Eliminar proyecto</button></td>           
          </tr>`;
    });
    $("#cuerpo-tabla").html(html);

    $(".btn-danger").on("click", function () {
      $("#modalEliminar").modal("show");
      $("#btnEliminar").data("index", $(this).data("index"));
    });
  }

  $("#btnEliminar").on("click", function () {
    let index = $(this).data("index");
    eliminar(index);
  });

  cargarProyectos();

  function eliminar(i) {
    proyectos.splice(i, 1);
    cargarProyectos();
  }

  $("#btnAgregarProyecto").on("click", function () {
    let ingreso = $("#ingresoDatos");
    if (ingreso.css("display") == "none" || ingreso.css("display") == "") {
      ingreso.show();
    } else {
      ingreso.hide();
    }
  });

  $("#btnAgregar").on("click", function () {
    let inputNombre = $("#nombre").val();
    let inputDescripcion = $("#descripcion").val();
    let nuevoProyecto = { nombre: inputNombre, descripcion: inputDescripcion };
    proyectos.push(nuevoProyecto);
    $("#nombre").val("");
    $("#descripcion").val("");
    $("#ingresoDatos").hide();
    cargarProyectos();
  });

  $("#formulario").on("submit", function () {
    event.preventDefault();
    $("#exito").show();
  });

  $("#reset").on("click", function () {
    $("#exito").hide();
  });
});
