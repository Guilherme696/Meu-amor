const dataInicio = new Date("2026-02-01T00:00:00");

function atualizarContador() {
    const agora = new Date();

    const diferenca = agora - dataInicio;

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);

    const horas = Math.floor(
        (segundosTotais % 86400) / 3600
    );

    const minutos = Math.floor(
        (segundosTotais % 3600) / 60
    );

    const segundos = segundosTotais % 60;

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;
}

atualizarContador();

setInterval(atualizarContador, 1000);