import { useState , useRef , useEffect } from 'react'

export default function Home() {
  const editorRef = useRef()
  const [ editorLoaded, setEditorLoaded ] = useState( false )
  const { CKEditor, CustomEditor } = editorRef.current || {}

  useEffect( () => {
    editorRef.current = {
      CKEditor: require( '@ckeditor/ckeditor5-react' ).CKEditor,
      CustomEditor: require('ckeditor5-custom-build')
    }
    setEditorLoaded( true )
  }, [] )

  

  // const router = useRouter();

  // // if user is not logged in
  // if(!data) {
  //   router.push('/login');
  // }

    return (
      <div className='w-full h-full' >
      <h1>Ckeditor5 Nextjs</h1>
      {
        editorLoaded ?
        <CKEditor className="mt-3 wrap-ckeditor" editor={CustomEditor} />
        :
        "loading..."
      }
      

    </div>
    )
}
