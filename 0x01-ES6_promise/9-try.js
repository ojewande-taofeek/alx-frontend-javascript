export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const fxn = mathFunction();
    queue.push(fxn);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
