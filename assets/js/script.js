$(function () {
  let proyectos = [
    { nombre: "Pintar", descripcion: "Pintar la casa" },
    { nombre: "Comprar", descripcion: "Comprar comida para el perro" },
    { nombre: "Pagar", descripcion: "Pagar la tarjeta de crédito" },
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
      let index = $(this).data("index");
      eliminar(index);
    });
  }

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
});
