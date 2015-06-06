<?php namespace SimpleLocator\Import;
/**
* Save the column mapping (Import Step 2)
*/
class SaveColumnMap {

	/**
	* Fields
	* @var array
	*/
	private $fields;

	public function __construct()
	{
		$this->setFields();
	}

	/**
	* Sanitize and set the fields
	*/
	private function setFields()
	{
		$fields = $_POST['wpsl_import_field'];
		foreach ( $fields as $key => $field ){
			$this->fields[$key] = new \StdClass();
			$this->fields[$key]->csv_column = intval($field['csv_column']);
			$this->fields[$key]->field = sanitize_text_field($field['field']);
			$this->fields[$key]->type = sanitize_text_field($field['type']);
		}
	}

	public function save()
	{
		$transient = get_transient('wpsl_import_file');
		$transient['columns'] = $this->fields;
		$transient['import_status'] = ( isset($_POST['wpsl_import_status']) && $_POST['wpsl_import_status'] == 'draft' ) ? 'draft' : 'publish';
		$transient['skip_first'] = ( isset($_POST['wpsl_first_row_header']) ) ? true : false;
		set_transient('wpsl_import_file', $transient, 1 * YEAR_IN_SECONDS);
	}

}