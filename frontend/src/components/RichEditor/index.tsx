import ReactQuill, { ReactQuillProps } from 'react-quill'
import { formats, modules } from './config'
import 'react-quill/dist/quill.snow.css'

interface RichTextEditorProps extends ReactQuillProps {
  label?: string
  value?: string
  hasExtra?: boolean
  error?: string
}

export const RichTextEditor = ({
  label,
  value,
  readOnly,
  hasExtra,
  children,
  error,
  onChange,
}: RichTextEditorProps) => {
  return (
    <div className="mb-3">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <div className="flex justify-between">
          <div className="flex items-center">{label}</div>
          {hasExtra && <div>{children}</div>}
        </div>
      </label>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        theme="snow"
        readOnly={readOnly}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}
