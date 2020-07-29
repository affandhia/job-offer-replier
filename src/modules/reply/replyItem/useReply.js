import { fieldType } from '../_common/constants'

const setValue = (text, key, value) => {
  if (!value) return text
  const regex = new RegExp(`\\$\\$${key}`, 'g')
  return text.replace(regex, value)
}

const getFieldsValue = field => {
  let text = ''
  if (!field) return text
  switch (field.type) {
    case fieldType.TEXT: {
      text = field.value
      break
    }
    case fieldType.RADIO: {
      const selectedValues = field.value.filter(i => i.isSelected)
      if (selectedValues.length > 0) {
        text = selectedValues[0].text
      }
      break
    }
    case fieldType.CHECKBOX: {
      const selectedValues = field.value.filter(i => i.isSelected)
      if (selectedValues.length > 0) {
        text = selectedValues.join(', ')
      }
      break
    }
    default:
      break
  }

  return text
}

const formatText = (rawText, fields) => {
  let text = rawText
  for (const key in fields) {
    text = setValue(text, key, getFieldsValue(fields[key]))
  }

  return text
}

const getMissedFormat = text => text.match(/\$\$([A-Za-z0-9]+)/g) || []

export function useReply(data) {
  const formattedText = formatText(data.value, data.fields)
  return {
    data,
    text: formattedText,
    unformattedVariable: getMissedFormat(formattedText),
    formatText,
  }
}

export default { useReply }
