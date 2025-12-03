

function FieldItem({ icon: Icon, name, bgColor }) {
  return (
    <section className="flex space-x-2">
      <span style={{ color: bgColor }}><Icon /></span>
      <span>{name}</span>
    </section>
  )
}

export default FieldItem
