function agendarCita() {
    const telefono = "595983736827"; // Reemplaza con tu número real
    const mensaje = encodeURIComponent("¡Hola! Me gustaría agendar una cita para manicura.");
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
}