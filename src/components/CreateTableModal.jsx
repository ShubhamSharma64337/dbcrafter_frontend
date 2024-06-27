import React, { useState } from 'react'
import Tooltip from './Tooltip';


export default function CreateTableModal({theme, show, toggleCreateModal, addTable, tbls, showAlert, dtypes, setIsLoading, urls, authInfo}) {
  // Below is an array of all the reserved keywords in MySQL
  const reservedKeywordsMysql = ["ACCESSIBLE","ACCOUNT","ACTION","ADD","AFTER","AGAINST","AGGREGATE","ALGORITHM","ALL","ALTER","ALWAYS","ANALYZE","AND","ANY","AS","ASC","ASCII","ASENSITIVE","AT","AUTOEXTEND_SIZE","AUTO_INCREMENT","AVG","AVG_ROW_LENGTH","BACKUP","BEFORE","BEGIN","BETWEEN","BIGINT","BINARY","BINLOG","BIT","BLOB","BLOCK","BOOL","BOOLEAN","BOTH","BTREE","BY","BYTE","CACHE","CALL","CASCADE","CASCADED","CASE","CATALOG_NAME","CHAIN","CHANGE","CHANGED","CHANNEL","CHAR","CHARACTER","CHARSET","CHECK","CHECKSUM","CIPHER","CLASS_ORIGIN","CLIENT","CLONE","CLOSE","COALESCE","CODE","COLLATE","COLLATION","COLUMN","COLUMNS","COLUMN_FORMAT","COLUMN_NAME","COMMENT","COMMIT","COMMITTED","COMPACT","COMPLETION","COMPRESSED","COMPRESSION","CONCURRENT","CONDITION","CONNECTION","CONSISTENT","CONSTRAINT","CONSTRAINT_CATALOG","CONSTRAINT_NAME","CONSTRAINT_SCHEMA","CONTAINS","CONTEXT","CONTINUE","CONVERT","CPU","CREATE","CROSS","CUBE","CUME_DIST","CURRENT","CURRENT_DATE","CURRENT_TIME","CURRENT_TIMESTAMP","CURRENT_USER","CURSOR","CURSOR_NAME","DATA","DATABASE","DATABASES","DATAFILE","DATE","DATETIME","DAY","DAY_HOUR","DAY_MICROSECOND","DAY_MINUTE","DAY_SECOND","DEALLOCATE","DEC","DECIMAL","DECLARE","DEFAULT","DEFAULT_AUTH","DEFINER","DELAYED","DELAY_KEY_WRITE","DELETE","DENSE_RANK","DESC","DESCRIBE","DESCRIPTION","DES_KEY_FILE","DETERMINISTIC","DIAGNOSTICS","DIRECTORY","DISABLE","DISCARD","DISK","DISTINCT","DISTINCTROW","DIV","DO","DOUBLE","DROP","DUAL","DUMPFILE","DUPLICATE","DYNAMIC","EACH","ELSE","ELSEIF","ENABLE","ENCLOSED","ENCRYPTION","END","ENDS","ENGINE","ENGINES","ENGINE_ATTRIBUTE","ENUM","ERROR","ERRORS","ESCAPE","ESCAPED","EVENT","EVENTS","EVERY","EXCEPT","EXCHANGE","EXCLUDE","EXECUTE","EXISTS","EXIT","EXPANSION","EXPIRE","EXPLAIN","EXPORT","EXTENDED","EXTENT_SIZE","FACTOR","FAILED_LOGIN_ATTEMPTS","FALSE","FAST","FAULTS","FETCH","FIELDS","FILE","FILE_BLOCK_SIZE","FILTER","FIRST","FIRST_VALUE","FIXED","FLOAT","FLOAT4","FLOAT8","FLUSH","FOLLOWING","FOLLOWS","FOR","FORCE","FOREIGN","FORMAT","FOUND","FROM","FULL","FULLTEXT","FUNCTION","GENERAL","GENERATED","GEOMCOLLECTION","GEOMETRY","GEOMETRYCOLLECTION","GET","GET_FORMAT","GET_MASTER_PUBLIC_KEY","GET_SOURCE_PUBLIC_KEY","GLOBAL","GRANT","GRANTS","GROUP","GROUPING","GROUPS","GROUP_REPLICATION","HANDLER","HASH","HAVING","HELP","HIGH_PRIORITY","HISTOGRAM","HISTORY","HOST","HOSTS","HOUR","HOUR_MICROSECOND","HOUR_MINUTE","HOUR_SECOND","IDENTIFIED","IF","IGNORE","IGNORE_SERVER_IDS","IMPORT","IN","INACTIVE","INDEX","INDEXES","INFILE","INITIAL_SIZE","INNER","INOUT","INSENSITIVE","INSERT","INSERT_METHOD","INSTALL","INSTANCE","INT","INT1","INT2","INT3","INT4","INT8","INTEGER","INTERVAL","INTO","INVISIBLE","INVOKER","IO","IO_AFTER_GTIDS","IO_BEFORE_GTIDS","IO_THREAD","IPC","IS","ISOLATION","ISSUER","ITERATE","JOIN","JSON","JSON_TABLE","JSON_VALUE","KEY","KEYRING","KEYS","KEY_BLOCK_SIZE","KILL","LAG","LANGUAGE","LAST","LAST_VALUE","LATERAL","LEAD","LEADING","LEAVE","LEAVES","LEFT","LESS","LEVEL","LIKE","LIMIT","LINEAR","LINES","LINESTRING","LIST","LOAD","LOCAL","LOCALTIME","LOCALTIMESTAMP","LOCK","LOCKED","LOCKS","LOGFILE","LOGS","LONG","LONGBLOB","LONGTEXT","LOOP","LOW_PRIORITY","MASTER","MASTER_AUTO_POSITION","MASTER_BIND","MASTER_COMPRESSION_ALGORITHMS","MASTER_CONNECT_RETRY","MASTER_DELAY","MASTER_HEARTBEAT_PERIOD","MASTER_HOST","MASTER_LOG_FILE","MASTER_LOG_POS","MASTER_PASSWORD","MASTER_PORT","MASTER_PUBLIC_KEY_PATH","MASTER_RETRY_COUNT","MASTER_SERVER_ID","MASTER_SSL","MASTER_SSL_CA","MASTER_SSL_CAPATH","MASTER_SSL_CERT","MASTER_SSL_CIPHER","MASTER_SSL_CRL","MASTER_SSL_CRLPATH","MASTER_SSL_KEY","MASTER_SSL_VERIFY_SERVER_CERT","MASTER_TLS_CIPHERSUITES","MASTER_TLS_VERSION","MASTER_USER","MATCH","MAXVALUE","MAX_CONNECTIONS_PER_HOUR","MAX_QUERIES_PER_HOUR","MAX_ROWS","MAX_SIZE","MAX_UPDATES_PER_HOUR","MAX_USER_CONNECTIONS","MEDIUM","MEDIUMBLOB","MEDIUMINT","MEDIUMTEXT","MEMORY","MERGE","MESSAGE_TEXT","MICROSECOND","MIDDLEINT","MIGRATE","MINUTE","MINUTE_MICROSECOND","MINUTE_SECOND","MIN_ROWS","MOD","MODE","MODIFIES","MODIFY","MONTH","MULTILINESTRING","MULTIPOINT","MULTIPOLYGON","MUTEX","MYSQL","MYSQL_ERRNO","NAME","NAMES","NATIONAL","NATURAL","NCHAR","NDB","NDBCLUSTER","NESTED","NETWORK_NAMESPACE","NEVER","NEW","NEXT","NO","NODEGROUP","NONE","NOT","NOWAIT","NO_WAIT","NO_WRITE_TO_BINLOG","NTH_VALUE","NTILE","NULL","NULLS","NUMBER","NUMERIC","NVARCHAR","OF","OFF","OFFSET","OIL","OLD","ON","ONE","ONLY","OPEN","OPTIMIZE","OPTIMIZER_COSTS","OPTION","OPTIONAL","OPTIONALLY","OPTIONS","OR","ORDER","ORDINALITY","ORGANIZATION","OTHERS","OUT","OUTER","OUTFILE","OVER","OWNER","PACK_KEYS","PAGE","PARSER","PARSE_GCOL_EXPR","PARTIAL","PARTITION","PARTITIONING","PARTITIONS","PASSWORD","PATH","PERCENT_RANK","PERSIST","PERSIST_ONLY","PHASE","PLUGIN","PLUGINS","PLUGIN_DIR","POINT","POLYGON","PORT","PRECEDES","PRECEDING","PRECISION","PREPARE","PRESERVE","PREV","PRIMARY","PRIVILEGES","PRIVILEGE_CHECKS_USER","PROCEDURE","PROCESS","PROCESSLIST","PROFILE","PROFILES","PROXY","PURGE","QUARTER","QUERY","QUICK","RANDOM","RANGE","RANK","READ","READS","READ_ONLY","READ_WRITE","REAL","REBUILD","RECOVER","RECURSIVE","REDOFILE","REDO_BUFFER_SIZE","REDUNDANT","REFERENCE","REFERENCES","REGEXP","REGISTRATION","RELAY","RELAYLOG","RELAY_LOG_FILE","RELAY_LOG_POS","RELAY_THREAD","RELEASE","RELOAD","REMOTE","REMOVE","RENAME","REORGANIZE","REPAIR","REPEAT","REPEATABLE","REPLACE","REPLICA","REPLICAS","REPLICATE_DO_DB","REPLICATE_DO_TABLE","REPLICATE_IGNORE_DB","REPLICATE_IGNORE_TABLE","REPLICATE_REWRITE_DB","REPLICATE_WILD_DO_TABLE","REPLICATE_WILD_IGNORE_TABLE","REPLICATION","REQUIRE","REQUIRE_ROW_FORMAT","RESET","RESIGNAL","RESOURCE","RESPECT","RESTART","RESTORE","RESTRICT","RESUME","RETAIN","RETURN","RETURNED_SQLSTATE","RETURNING","RETURNS","REUSE","REVERSE","REVOKE","RIGHT","RLIKE","ROLE","ROLLBACK","ROLLUP","ROUTINE","ROW","ROWS","ROW_COUNT","ROW_FORMAT","ROW_NUMBER","RTREE","SAVEPOINT","SCHEDULE","SCHEMA","SCHEMAS","SCHEMA_NAME","SECOND","SECONDARY","SECONDARY_ENGINE","SECONDARY_ENGINE_ATTRIBUTE","SECONDARY_LOAD","SECONDARY_UNLOAD","SECOND_MICROSECOND","SECURITY","SELECT","SENSITIVE","SEPARATOR","SERIAL","SERIALIZABLE","SERVER","SESSION","SET","SHARE","SHOW","SHUTDOWN","SIGNAL","SIGNED","SIMPLE","SKIP","SLAVE","SLOW","SMALLINT","SNAPSHOT","SOCKET","SOME","SONAME","SOUNDS","SOURCE","SOURCE_AUTO_POSITION","SOURCE_BIND","SOURCE_COMPRESSION_ALGORITHMS","SOURCE_CONNECT_RETRY","SOURCE_DELAY","SOURCE_HEARTBEAT_PERIOD","SOURCE_HOST","SOURCE_LOG_FILE","SOURCE_LOG_POS","SOURCE_PASSWORD","SOURCE_PORT","SOURCE_PUBLIC_KEY_PATH","SOURCE_RETRY_COUNT","SOURCE_SSL","SOURCE_SSL_CA","SOURCE_SSL_CAPATH","SOURCE_SSL_CERT","SOURCE_SSL_CIPHER","SOURCE_SSL_CRL","SOURCE_SSL_CRLPATH","SOURCE_SSL_KEY","SOURCE_SSL_VERIFY_SERVER_CERT","SOURCE_TLS_CIPHERSUITES","SOURCE_TLS_VERSION","SOURCE_USER","SPACE","SPATIAL","SPECIFIC","SQL","SQLEXCEPTION","SQLSTATE","SQLWARNING","SQL_AFTER_GTIDS","SQL_AFTER_MTS_GAPS","SQL_BEFORE_GTIDS","SQL_BIG_RESULT","SQL_BUFFER_RESULT","SQL_CACHE","SQL_CALC_FOUND_ROWS","SQL_NO_CACHE","SQL_SMALL_RESULT","SQL_THREAD","SQL_TSI_DAY","SQL_TSI_HOUR","SQL_TSI_MINUTE","SQL_TSI_MONTH","SQL_TSI_QUARTER","SQL_TSI_SECOND","SQL_TSI_WEEK","SQL_TSI_YEAR","SRID","SSL","STACKED","START","STARTING","STARTS","STATS_AUTO_RECALC","STATS_PERSISTENT","STATS_SAMPLE_PAGES","STATUS","STOP","STORAGE","STORED","STRAIGHT_JOIN","STREAM","STRING","SUBCLASS_ORIGIN","SUBJECT","SUBPARTITION","SUBPARTITIONS","SUPER","SUSPEND","SWAPS","SWITCHES","SYSTEM","TABLE","TABLES","TABLESPACE","TABLE_CHECKSUM","TABLE_NAME","TEMPORARY","TEMPTABLE","TERMINATED","TEXT","THAN","THEN","THREAD_PRIORITY","TIES","TIME","TIMESTAMP","TIMESTAMPADD","TIMESTAMPDIFF","TINYBLOB","TINYINT","TINYTEXT","TO","TRAILING","TRANSACTION","TRANSACTIONAL","TRANSACTIONALLY","TRANSFORM","TRIGGER","TRIGGERS","TRUE","TRUNCATE","TYPE","TYPES","UNBOUNDED","UNCOMMITTED","UNDEFINED","UNDO","UNDOFILE","UNDO_BUFFER_SIZE","UNICODE","UNINSTALL","UNION","UNIQUE","UNKNOWN","UNLOCK","UNSIGNED","UNTIL","UPDATE","UPGRADE","USAGE","USE","USER","USER_RESOURCES","USE_FRM","USING","UTC_DATE","UTC_TIME","UTC_TIMESTAMP","VALIDATION","VALUE","VALUES","VARBINARY","VARCHAR","VARCHARACTER","VARIABLES","VARYING","VCPU","VIEW","VIRTUAL","VISIBLE","WAIT","WARNINGS","WEEK","WEIGHT_STRING","WHEN","WHERE","WHILE","WINDOW","WITH","WITHOUT","WORK","WRAPPER","WRITE","X509","XA","XID","XML","XOR","YEAR","YEAR_MONTH","ZEROFILL","ZONE"];
  const [maxIndex, setMaxIndex] = useState(0);
  const [newTbl, setNewTbl] = useState({name: 'table1', fields: [ //this state variable tracks the details filled into the modal form by the user, once finished, when user clicks on go button, this variable is used to add to the application level diagram object's tables
    {name: 'id', type: 'INT', size: null, notNull: false, unique: false, pKey: null, isFKey: false, refTbl: 'NONE', refField: 'NONE', default: null}
  ]})
  const [formValidation, setFormValidation] = useState(['none']); //This stores a combination of a indentifier and index of 
  //field name input element, which have invalid text in them

  function handleNameChange(e){ //table name change handler
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    let newFormValidation = [...formValidation];
    if(name === 'tblName'){
      if(/(^[0-9].*|^.*\s.*$|^.*[!@#$%^&*(),.?":{}|<>-].*$)/.test(value)){ //Here we check if the field name satisfies the valid name pattern of MySQL
        if(newFormValidation.indexOf('tableName')<0){
          newFormValidation.push('tableName'); // and is not already pushed, then push the 'fieldName'+index string into the validation status array
        }
      }
      else if(reservedKeywordsMysql.includes(value.toUpperCase())){ // and the name he enters is a reserved keyword
        if(newFormValidation.indexOf('tableName')<0){
          newFormValidation.push('tableName'); // and is not already pushed, then push the 'fieldName'+index string into the validation status array
        }
      } else {
        let removalIndex = newFormValidation.indexOf('tableName'); //otherwise, if the name user is updating, was already invalid, then
        if(removalIndex>-1){ // remove it from the validation status array
          newFormValidation.splice(removalIndex, 1)
        }
      }
    }
    setFormValidation(newFormValidation);
    setNewTbl({...newTbl, name: e.target.value});
  }

  function addField(e){ //this adds field to the newTbl state variable which represents the temporary table filled into the modal and not the table belonging to the diagram
    let tableCopy = {...newTbl, fields: newTbl.fields.map((element, index)=>{
      return {...element}
    })}
    const insertIndex = parseInt(e.currentTarget.dataset.rowindex) + 1;
    tableCopy.fields.splice(insertIndex,0, {name: 'field'+(maxIndex+1),size: null, type: 'INT', notNull: false, unique: false,pKey: false, isFKey: false, refTbl: 'NONE', refField: 'NONE', default: null})
    setNewTbl(tableCopy);
    setMaxIndex(maxIndex+1);
  }

  function delField(e){ //this deletes field from the newTbl state variable which represents the temporary table filled into the modal and not the table belonging to the diagram
    let tableCopy = {...newTbl, fields: newTbl.fields.map((element, index)=>{
      return {...element}
    })}
    if(tableCopy.fields.length<2){
      showAlert("Table must have at least one row!","danger");
      return;
    }
    tableCopy.fields.splice(parseInt(e.currentTarget.dataset.rowindex),1)
    setNewTbl(tableCopy);
  }

  function handleChange(e){
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    const rowindex = parseInt(e.currentTarget.dataset.rowindex);
    let tableCopy = {}
    if(e.currentTarget.name==='isFKey'){ //to handle change in fkey checkbox
      let checked = e.currentTarget.checked;
      tableCopy = {...newTbl, fields: newTbl.fields.map((element, index)=>{
        if(index === rowindex){
          if(checked === false){
            return {...element, [name]:checked, refTbl: 'NONE', refField: 'NONE'}
          }
          return {...element, [name]: checked};
        } else {
          return {...element};
        }
      })}
    } else if (name === 'notNull' || name === 'unique'){ //handles change in Not Null checkbox
      let checked = e.currentTarget.checked;
      tableCopy = {...newTbl, fields: newTbl.fields.map((element, index)=>{
        if(index === rowindex){
          return {...element, [name]: checked};
        } else {
          return {...element};
        }
      })}
    } else if (name === 'pKey'){ //handle change in pkey checkbox
      let checked = e.currentTarget.checked;
      tableCopy = {...newTbl, fields: newTbl.fields.map((element, index)=>{
        if(index === rowindex){
          return {...element, [name]: checked};
        } else {
          return {...element};
        }
      })}
    } else {  //handle change in field name or type or any other text input
      let newFormValidation = [...formValidation];
      
      if(name === 'name'){ //If the user is trying to change the name of a field
        if(/(^[0-9].*|^.*\s.*$|^.*[!@#$%^&*(),.?":{}|<>-].*$)/.test(value)){ //Here we check if the field name satisfies the valid name pattern of MySQL
          if(newFormValidation.indexOf('fieldName'+rowindex)<0){
            newFormValidation.push('fieldName'+rowindex); // and is not already pushed, then push the 'fieldName'+index string into the validation status array
          }
        }
        else if(reservedKeywordsMysql.includes(value.toUpperCase())){ // and the name he enters is a reserved keyword
          if(newFormValidation.indexOf('fieldName'+rowindex)<0){
            newFormValidation.push('fieldName'+rowindex); // and is not already pushed, then push the 'fieldName'+index string into the validation status array
          }
        } else {
          let removalIndex = newFormValidation.indexOf('fieldName'+rowindex); //otherwise, if the name user is updating, was already invalid, then
          if(removalIndex>-1){ // remove it from the validation status array
            newFormValidation.splice(removalIndex, 1)
          }
        }
      }
      setFormValidation(newFormValidation);
      tableCopy = {...newTbl, fields: newTbl.fields.map((element, index)=>{
        if(index === rowindex){
          return {...element, [name]: value};
        } else {
          return {...element};
        }
      })}
    }
    setNewTbl(tableCopy);
  }

  function handleSelect(e){ //this function handles change in selection of all the select lists
    const name = e.currentTarget.name; //retrieving the name value of the select list, this will be same as the key in the newTbl dictionary
    const value = e.currentTarget.value; //retrieving the value of the select field
    const rowindex = parseInt(e.currentTarget.dataset.rowindex); //retrieving the field index using the data attribute of the select input
    let tableCopy = {...newTbl, fields: newTbl.fields.map((element, index)=>{ //now starting actually modifying the select field
        if(index === rowindex){
          return {...element, [name]: value, size: null};  //Here we set size to null because if datatype is set to one without size, we need to update it
        } else {
          return {...element};
        }
    })}
    setNewTbl(tableCopy);
  }

  function addTbl(){
    if(!document.querySelector('form').checkValidity()){ //this is required because by default, unless form is submitted with submit button, validation is not triggered
      document.querySelector('form').reportValidity();
      return;
    }
    if(reservedKeywordsMysql.includes(newTbl.name.toUpperCase())){ //If table name is a reserved keyword, do not add the table
      showAlert('Invalid table name, reserved keywords cannot be used as table names');
      return;
    }
    for(let field of newTbl.fields){ //If the field name is a reserved keyword, do not add the field
      if(reservedKeywordsMysql.includes(field.name.toUpperCase())){
        showAlert('Invalid field name, reserved keywords cannot be used as field names');
        return;
      }
      if(field.isFKey){
        if(field.refTbl==='NONE' || field.refField==='NONE'){
          showAlert("You must set referenced table and field if you have checked Foreign key!","warning");
          return;
        }
      }
      if(/^\s*$/.test(field.name)){
        showAlert("Fieldname cannot be empty!","warning");
        return;
      }
    }
    let res = addTable(newTbl);
    if(res!==0){
      return;
    }
    toggleCreateModal();
    setNewTbl({name: 'table1', fields: [{name: 'id', type: 'INT', size: null, notNull: false, unique: false,pKey: false, isFKey: false, refTbl: 'NONE', refField: 'NONE'}]}) //this resets
    //the modal when a table has been added
    setMaxIndex(0)
  }

  function closeModal(){
    setNewTbl({name: 'table1', fields: [{name: 'id', type: 'INT', size: null, notNull: false, unique: false,pKey: false, isFKey: false, refTbl: 'NONE', refField: 'NONE'}]}) //this resets the modal
    //if the user closes the modal without adding the table to the diagram
    setMaxIndex(0)
    toggleCreateModal(0)
  }

  function autoFill(){
    if(!document.getElementById('tableName').checkValidity()){ //this is required because by default, unless form is submitted with submit button, validation is not triggered
      document.getElementById('tableName').reportValidity();
      return;
    }
    const fdata = {tblName: document.getElementById('tableName').value};
    setIsLoading(true);
    fetch(import.meta.env.PROD?urls.productionUrl+'/user/getattributes':urls.devUrl+'/user/getattributes', {
      method: 'POST',
      headers: {         
        'Content-Type': 'application/json',
      },
      credentials: 'include', //this must be set in order to save the received session-cookie,
      //also, after setting credentials to include, cors options must be set to allow credentials and origin from this domain
      body: JSON.stringify(fdata)
    })
    .then(response => response.json()) //response.json() or response.text() provides the 'data'
    .then((data) => {
        if(data.success){
          let autoTbl = {...newTbl, fields: []};
        for(let field of data.message){
          autoTbl.fields.push({name: field.name, type: field.type, size: null, notNull: false,pKey: field.isPKey, isFKey: false, refTbl: 'NONE', refField: 'NONE'})
        }
        setNewTbl(autoTbl);
      }else{
        showAlert(data.message, data.success?'success':'danger')
      }
    })
    .catch((error)=>{
      showAlert('An error occured while trying to access the backend API', 'danger')
      console.log(error)
    })
    .finally(()=>{
      //stopping the loader
      setIsLoading(false);
    })
  }

  return (
    show && <div className="overlay overflow-auto fixed justify-center md:justify-center flex items-start p-5 top-0 w-screen h-screen bg-black bg-opacity-35" id="addTblModal" data-modal-id="addTblModal">
        <div className={`modal ${theme==='dark'?'bg-gray-950 text-white':'bg-white'} rounded w-full`}>
            {/* Modal Header */}
            <div className="modal-header flex justify-between items-center border-blue-700 border-b-2 p-3">
              <button type="button" className={`p-2 rounded-full transition-colors ${theme==='dark'?'hover:bg-red-500':'bg-slate-200 hover:bg-red-300'}`} onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <p className='text-center text-lg font-medium '>Add New Table</p>
              <button className={` p-2 rounded-full  transition-colors ${theme==='dark'?'hover:bg-blue-500':'bg-slate-200 hover:bg-blue-300'}`} type='button' onClick={addTbl}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
              </button>

            </div>

            {/* Modal Body */}
            <div className="modal-body p-5">
            <form className="flex flex-col overflow-auto">
                    <div className="mb-3 p-1">
                          <label className='block' htmlFor='tableName'>Table Name</label>
                        <div className='flex gap-x-2'>
                          <div className='flex flex-col'>
                            <input name='tblName' id='tableName' className={`rounded focus:outline-none border-2  p-2  ${theme==='dark'?formValidation.includes('tableName') ? 'bg-gray-900 border-red-500': 'bg-gray-900  border-slate-700 focus:border-blue-500':formValidation.includes('tableName')?'border-red-500 ': 'focus:border-blue-700'}`} value={newTbl.name}  onChange={handleNameChange} type='text' required={true} maxLength={64} placeholder='Enter the table name'></input>
                            <span className={`${formValidation.includes('tableName')?'':'hidden'} text-red-500 text-sm text-left`}>Invalid Table Name</span>
                          </div>
                          <button onClick={autoFill} type="button" className={`h-min p-2 rounded-full disabled:bg-slate-100  group relative ${theme==='dark'?'bg-purple-400 hover:bg-purple-500':'bg-purple-100 hover:bg-purple-200'}`} disabled={authInfo?false:true}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>
                            <Tooltip theme={theme} text={authInfo?'Use AI to generate fields':'Please Sign In to use AI related features'} position={'right'}></Tooltip>
                          </button>
                        </div>
                    </div>
                    <table className={`ms-1 text-center border ${theme==='dark'?'border-slate-700':''}`} cellPadding={15} cellSpacing={5}>
                      
                      <tbody>
                        <tr>
                          <th>Field name</th>
                          <th>Datatype</th>
                          <th>Attributes</th>
                          <th>Not Null</th>
                          <th>Unique</th>
                          <th>Primary Key</th>
                          <th>Foreign Key</th>
                          <th>Referenced Table</th>
                          <th>Referenced Field</th>
                          <th>Default</th>
                        </tr>
                        {newTbl.fields.map((element, index)=>{
                          return <tr key={`row${index}`} className='align-text-top'>
                          <td className='flex flex-col'>
                            <input name='name' type='text' required={true} className={`rounded focus:outline-none border-2  p-2  ${theme==='dark'?formValidation.includes('fieldName'+index) ? 'bg-gray-900 border-red-500': 'bg-gray-900  border-slate-700 focus:border-blue-500':formValidation.includes('fieldName'+index)?'border-red-500 ': 'focus:border-blue-700'}`} value={element.name} data-rowindex={index} placeholder='Enter table name' onChange={handleChange}></input>
                            <span className={`${formValidation.includes('fieldName'+index)?'':'hidden'} text-red-500 text-sm text-left`}>Invalid Field Name</span>
                          </td>
                          <td>
                            <select name='type' className={`border ${theme==='dark'?'bg-gray-900 focus:outline-none focus:border-blue-500 border-slate-700':' outline-blue-700'} py-2 px-3`} value={element.type} data-rowindex={index} onChange={handleSelect}>
                              {dtypes.map((element, index)=>{
                                return <option key={index}>{element}</option>
                              })}
                            </select>
                          </td>
                          <td> {/* IMPORTANT */}
                            <input name='size' pattern={["DECIMAL","DEC","FLOAT","DOUBLE"].includes(element.type) ? "^[0-9]+,[0-9]+$" : ["SET","ENUM"].includes(element.type) ? "^'([^',]*)'(?:,'([^',]*)')*$":undefined } type={["DECIMAL","DEC","FLOAT","DOUBLE","SET","ENUM"].includes(element.type)? 'text':'number'} required={['VARCHAR','VARBINARY'].includes(element.type) ? true:false} min={["DECIMAL","DEC","FLOAT","DOUBLE"].includes(element.type)?undefined:0} disabled={['DATE','BOOL','BOOLEAN','TINYTEXT','TINYBLOB',"MEDIUMTEXT","MEDIUMBLOB","LONGTEXT","LONGBLOB","YEAR"].includes(element.type) ?true:false} className={`${theme==='dark'?'bg-gray-900 focus:outline-none focus:border-blue-500 border-slate-700':'outline-blue-700'} border p-2 `} max={8000} value={newTbl.fields[index].size?newTbl.fields[index].size:''}  data-rowindex={index} placeholder={["DECIMAL","DEC","FLOAT","DOUBLE"].includes(element.type) ? 'Precision,Scale':['INT','INTEGER','BIGINT','SMALLINT','TINYINT','MEDIUMINT'].includes(element.type) ? 'Width':["SET","ENUM"].includes(element.type)?"'val1','val2',...":['DATETIME','TIME','TIMESTAMP'].includes(element.type) ? 'fsp':'Length'} onChange={handleChange}></input>
                          </td>
                          <td>
                            <input name='notNull' type='checkbox' className='border p-2 w-5 h-5 accent-blue-700' checked={element.notNull} data-rowindex={index} onChange={handleChange}></input>
                          </td>
                          <td>
                            <input name='unique' type='checkbox' className='border p-2 w-5 h-5 accent-blue-700' checked={element.unique} data-rowindex={index} onChange={handleChange}></input>
                          </td>
                          <td>
                            <input name='pKey' type='checkbox' className='border p-2 w-5 h-5 accent-blue-700' checked={element.pKey} data-rowindex={index} onChange={handleChange}></input>
                          </td>
                          <td>
                            <input name='isFKey' type='checkbox' className='border p-2 w-5 h-5 accent-blue-700' checked={element.isFKey} data-rowindex={index} onChange={handleChange}></input>
                          </td>
                          <td>
                            <select name='refTbl' className={`${theme==='dark'?'bg-gray-900 focus:outline-none focus:border-blue-500 border-slate-700':' outline-blue-700'} border py-2 px-3`} value={element.refTbl} data-rowindex={index} onChange={handleSelect} disabled={!element.isFKey}>
                              <option value="NONE">NONE</option>
                              {tbls && tbls.map((element, index)=>{
                                return <option key={index}>{element.name}</option>
                              })}
                            </select>
                          </td>
                          <td>
                            <select name='refField' className={`refFieldInput ${theme==='dark'?'bg-gray-900 focus:outline-none focus:border-blue-500 border-slate-700':'outline-blue-700'} border py-2 px-3 `} disabled={element.refTbl==='NONE'?true:false} value={element.refTbl==='NONE'?'NONE':element.refField} data-rowindex={index} onChange={handleSelect}>
                              <option value={'NONE'}>NONE</option>
                              {tbls && tbls.map((table)=>{
                                if(table.name === element.refTbl){
                                  return table.fields.map((field, index)=>{
                                    return <option key={index}>{field.name}</option>
                                  })
                                }
                              })}
                            </select>
                          </td>
                          <td> {/* IMPORTANT */}
                          {
                              ["BOOL","BOOLEAN"].includes(element.type) ? 
                                <select name='default' className={`border p-2 ${theme==='dark'?'bg-gray-900 focus:outline-none border-slate-700 focus:border-blue-500':'outline-blue-500'} `} value={element.default} data-rowindex={index} onChange={handleSelect}>
                                  <option>NONE</option>
                                  <option>TRUE</option>
                                  <option>FALSE</option>
                                </select>
                                :
                                <input pattern={["CHAR","VARCHAR","TEXT","MEDIUMTEXT","LONGTEXT","TINYTEXT","DATETIME","TIMESTAMP"].includes(element.type) ? "[^']*" : element.type === 'SET' ? "^'([^',]*)(?:,([^',]*))*'$": element.type === 'ENUM' ? "^'([^',]+)'$":undefined} name='default' type={["CHAR","VARCHAR","TEXT","MEDIUMTEXT","LONGTEXT","TINYTEXT","DATETIME","TIMESTAMP","SET","ENUM"].includes(element.type)? 'text': ["DATE"].includes(element.type) ? 'date' : 'number'} className={`${theme==='dark'?'bg-gray-900 focus:outline-none focus:border-blue-500 border-slate-700':'outline-blue-700'} border p-2`} value={element.default?element.default:''}  data-rowindex={index} placeholder={element.type === 'SET'? "'val1,val2,...'": element.type === 'ENUM' ? "'value'":'Enter a value'} onChange={handleChange}></input>
                            }  
                          </td>
                          <td>
                              <button type="button" className="rounded" data-rowindex={index} onClick={addField}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                              </button>
                          </td>
                          <td>
                              <button type="button" className="rounded" data-rowindex={index} onClick={delField}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                              </button>
                          </td>
                        </tr>
                        })}
                      </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
  )
}
