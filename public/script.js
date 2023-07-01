const schedule = [
    [], // segunda-feira
    [], // terça-feira
    [], // quarta-feira
    [], // quinta-feira
    [], // sexta-feira
    []  // sábado
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
      input.addEventListener('change', (event) => {
        const [day, hour] = event.target.id.split('-').slice(1);
        const value = event.target.value;
        schedule[day][hour] = { name: value };
      });
    });
  });
  