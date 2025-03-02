export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (length > position) {
    const view = new DataView(buffer, 0);
    view.setInt8(position, value);
    return view;
  }
  throw Error('Position outside range');
}
