import { z } from "zod";

enum AggregateEnum {
  sum = "sum",
  avg = "avg",
  max = "max",
  min = "min",
  count = "count",
}

enum AlignEnum {
  center = "center",
  left = "left",
  right = "right",
}

enum CellBreakEnum {
  all = "all",
  ellipsis = "ellipsis",
  normal = "normal",
  word = "word",
  none = "none",
}

enum CellEditorEnum {
  disabled = "disabled",
}

enum CellTooltipActionEnum {
  click = "click",
  hover = "hover",
}

enum CellTooltipIconEnum {
  batchedit = "batchedit",
  batcheditcancel = "batcheditcancel",
  batcheditsave = "batcheditsave",
  cancel = "cancel",
  cancelrecord = "cancelrecord",
  checked = "checked",
  checkmark = "checkmark",
  close = "close",
  createrecord = "createrecord",
  down = "down",
  duplicaterecord = "duplicaterecord",
  edit = "edit",
  editrecord = "editrecord",
  error = "error",
  'error-tmp' = "error-tmp",
  filter = "filter",
  firstpage = "firstpage",
  fixedmenu = "fixedmenu",
  info = "info",
  lastpage = "lastpage",
  layoutcard = "layoutcard",
  layoutrow = "layoutrow",
  link = "link",
  menu = "menu",
  nextpage = "nextpage",
  outsidearrow = "outsidearrow",
  prevpage = "prevpage",
  reload = "reload",
  remove = "remove",
  removerecord = "removerecord",
  search = "search",
  sort = "sort",
  submitrecord = "submitrecord",
  success = "success",
  unchecked = "unchecked",
  undoremoverecord = "undoremoverecord",
  up = "up",
  warning = "warning",
}

enum CellTooltipPositionEnum {
  top = "top",
  left = "left",
  right = "right",
  bottom = "bottom",
}

enum CellTooltipTypeEnum {
  default = "default",
  system = "system",
}

enum ColumnDragActionEnum {
  reorder = "reorder",
  hide = "hide",
  both = "both",
}

enum ColumnWidthEnum {
  fit = "fit",
  fitheader = "fitheader",
  fitcontent = "fitcontent",
  stretch = "stretch",
}

enum FilterEnum {
  menu = "menu",
  inline = "inline",
  both = "both",
  disabled = "disabled",
}

enum FilterButtonsEnum {
  reset = "reset",
  close = "close",
  apply = "apply",
}

enum FilterConditionsEnum {
  none = "none",
  empty = "empty",
  notEmpty = "notEmpty",
  equals = "equals",
  notEquals = "notEquals",
  beginsWith = "beginsWith",
  endsWith = "endsWith",
  contains = "contains",
  notContains = "notContains",
  between = "between",
  notBetween = "notBetween",
  greaterThan = "greaterThan",
  greaterEqualThan = "greaterEqualThan",
  lessThan = "lessThan",
  lessEqualThan = "lessEqualThan",
  before = "before",
  after = "after",
  betweenDate = "betweenDate",
  today = "today",
  yesterday = "yesterday",
  tomorrow = "tomorrow",
  break = "break",
  default = "default",
  trueVal = "trueVal",
  falseVal = "falseVal",
}

enum FilterMenuAreasEnum {
  conditions = "conditions",
  selectbox = "selectbox",
  both = "both",
}

enum FilterOnEnum {
  raw = "raw",
  rendered = "rendered",
}

enum FilterTriggerEnum {
  button = "button",
  change = "change",
}

enum FrozenEnum {
  left = "left",
  right = "right",
}

enum HeaderIconPositionEnum {
  left = "left",
  right = "right",
  'after-text' = "after-text",
}

enum HeaderTooltipTriggerEnum {
  text = "text",
  icon = "icon",
}

enum TypeEnum {
  aggregate = "aggregate",
  boolean = "boolean",
  button = "button",
  checkbox = "checkbox",
  color = "color",
  currency = "currency",
  custom = "custom",
  date = "date",
  duplicate = "duplicate",
  editor = "editor",
  element = "element",
  email = "email",
  emoji = "emoji",
  icon = "icon",
  image = "image",
  iframe = "iframe",
  number = "number",
  password = "password",
  percentage = "percentage",
  radio = "radio",
  range = "range",
  remover = "remover",
  'row-details' = "row-details",
  'row-group' = "row-group",
  'row-number' = "row-number",
  select = "select",
  selector = "selector",
  tel = "tel",
  text = "text",
  toggle = "toggle",
  url = "url",
}

enum TypeIframeRatioEnum {
  square = "square",
}

enum TypeImageMaskEnum {
  circle = "circle",
}

enum TypeUrlIconEnum {
  link = "link",
  outsidearrow = "outsidearrow",
}

enum WidthEnum {
  fit = "fit",
  fitheader = "fitheader",
  fitcontent = "fitcontent",
  'max-content' = "max-content",
  'min-content' = "min-content",
  stretch = "stretch",
}

enum ConfirmationsEnum {
  'batch-edit' = "batch-edit",
  'batch-edit-discard' = "batch-edit-discard",
  delete = "delete",
  disabled = "disabled",
  all = "all",
}

enum CreatorEnum {
  inline = "inline",
}

enum DirEnum {
  ltr = "ltr",
  rtl = "rtl",
}

enum EditorEnum {
  inline = "inline",
  modal = "modal",
}

enum EditorControlsEnum {
  all = "all",
  creator = "creator",
  editor = "editor",
  remover = "remover",
}

enum GridlinesEnum {
  both = "both",
  horz = "horz",
  horizontal = "horizontal",
  vert = "vert",
  vertical = "vertical",
}

enum LayoutEnum {
  card = "card",
  row = "row",
}

enum NestedDataSeparatorEnum {
  '/' = "/",
  disabled = "disabled",
}

enum PagerPositionEnum {
  top = "top",
  bottom = "bottom",
}

enum PagerTypeEnum {
  'button-text' = "button-text",
  'button-arrows' = "button-arrows",
}

enum ZGParamEnum {
  adapter = "adapter",
  idKey = "idKey",
  newIndexPath = "newIndexPath",
  recordPath = "recordPath",
  nodePath = "nodePath",
  searchKey = "searchKey",
  search = "search",
  serverFilter = "serverFilter",
  filterFunction = "filterFunction",
  sortByKey = "sortByKey",
  sortBy = "sortBy",
  sortDirKey = "sortDirKey",
  sortDir = "sortDir",
  batchEditStatus = "batchEditStatus",
  startAtKey = "startAtKey",
  startAtValue = "startAtValue",
  limitToKey = "limitToKey",
  limitTo = "limitTo",
  offsetKey = "offsetKey",
  offsetValue = "offsetValue",
  pageKey = "pageKey",
  countPath = "countPath",
  cursor = "cursor",
  loadByPage = "loadByPage",
  loadByScroll = "loadByScroll",
  hasNextPath = "hasNextPath",
  nextPath = "nextPath",
  nextIDPath = "nextIDPath",
  nextIDKey = "nextIDKey",
  hasPrevPath = "hasPrevPath",
  prevPath = "prevPath",
  prevIDPath = "prevIDPath",
  prevIDKey = "prevIDKey",
  pageBase = "pageBase",
  selectorKey = "selectorKey",
  csvCaption = "csvCaption",
  csvDelimiter = "csvDelimiter",
  csvHeader = "csvHeader",
  csvLineSeparator = "csvLineSeparator",
  tableHide = "tableHide",
  tableHead = "tableHead",
  tableDataFormat = "tableDataFormat",
  tableHeadFormat = "tableHeadFormat",
  collection = "collection",
  subscription = "subscription",
  dataTable = "dataTable",
  createOptions = "createOptions",
  readOptions = "readOptions",
  updateRowOptions = "updateRowOptions",
  updateCellOptions = "updateCellOptions",
  updateOptions = "updateOptions",
  deleteOptions = "deleteOptions",
  src = "src",
  createSrc = "createSrc",
  readSrc = "readSrc",
  updateRowSrc = "updateRowSrc",
  updateCellSrc = "updateCellSrc",
  deleteSrc = "deleteSrc",
  restmode = "restmode",
  method = "method",
  createMethod = "createMethod",
  readMethod = "readMethod",
  updateRowMethod = "updateRowMethod",
  updateCellMethod = "updateCellMethod",
  deleteMethod = "deleteMethod",
  headers = "headers",
  queryString = "queryString",
  body = "body",
  bodyMethodSuffix = "bodyMethodSuffix",
  createBody = "createBody",
  readBody = "readBody",
  updateRowBody = "updateRowBody",
  updateCellBody = "updateCellBody",
  deleteBody = "deleteBody",
  createCustomFunction = "createCustomFunction",
  readCustomFunction = "readCustomFunction",
  updateCellCustomFunction = "updateCellCustomFunction",
  updateRowCustomFunction = "updateRowCustomFunction",
  deleteCustomFunction = "deleteCustomFunction",
  serverErrorMessage = "serverErrorMessage",
  serverErrorPath = "serverErrorPath",
  exclude = "exclude",
  cdataEscape = "cdataEscape",
  requestType = "requestType",
  responseType = "responseType",
  dataType = "dataType",
  urlSuffix = "urlSuffix",
  mode = "mode",
}

enum RowHeightEnum {
  auto = "auto",
}

enum RowHeightScopeEnum {
  data = "data",
  headers = "headers",
  all = "all",
}

enum StatusPositionEnum {
  'top left' = "top left",
  'center left' = "center left",
  'bottom left' = "bottom left",
  'top center' = "top center",
  center = "center",
  'bottom center' = "bottom center",
  'top right' = "top right",
  'center right' = "center right",
  'bottom right' = "bottom right",
  bar = "bar",
}

enum ThemeEnum {
  android = "android",
  black = "black",
  default = "default",
  dark = "dark",
  ios = "ios",
}

export const ZingGridSchema = z.object({
  aggregate: z.nativeEnum(AggregateEnum).or(z.string())
    .optional()
    .describe("Adds aggregate column and sets the type-aggregate-value to the specified value"),
  align: z.nativeEnum(AlignEnum)
    .optional()
    .describe("Aligns the contents of the grid's text"),
  batchEdit: z.boolean()
    .optional()
    .describe("Presence of attribute indicates the grid allows batch editing and displays the controls. In batch edit mode, changes can be made to cells that do not have edit disabled or are not a part of the \"recordkey\" column."),
  batchEditStatus: z.string()
    .optional()
    .describe("Sets the message to display when making batch edits. Can use the following tokens: [[changes]], [[deleted]], [[fieldsEdited]], [[inserted]], [[modified]], [[recordsEdited]]. Can append 'Message' to any of the above for a string description."),
  buttonTooltipDisabled: z.boolean()
    .optional()
    .describe("Turns off the tooltips on all buttons in the grid"),
  caption: z.string()
    .optional()
    .describe("The caption for the grid"),
  card: z.object({
    editor: z.string()
      .optional()
      .describe("Sets the custom editor"),
    editorTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the card's editor."),
    renderer: z.string()
      .optional()
      .describe("The return value of the method is set as the innerHTML of `<zg-card>`. If nothing is returned, it will not change the currently rendered card. The method takes the parameters `data`, `domCard`, and `rowObject`."),
    rendererTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the card's render."),
  })
    .strict()
    .optional()
    .describe("Specifies the defined `<zg-card>` of the grid. More appropriate to use `<zg-card>` in most cases or set the property programmatically."),
  cellBreak: z.nativeEnum(CellBreakEnum)
    .optional()
    .describe("The type of `word-break` style for body cells. When not set, `cell-break` style is `normal` by default. If the width of a column is set, `cell-break` is `word` by default. To overwrite `cell-break` for cells in a specific column, set `cell-break` for that column."),
  cellClass: z.string()
    .optional()
    .describe("Adds a class to each `<zg-cell>` in the grid. This attribute can be applied to both `<zing-grid>` or `<zg-column>`. If the attribute is applied to both, `<zg-column>`'s `cell-class` overwrites `<zing-grid>`'s `cell-class`. To set a class conditionally, set `cell-class` to the name of the function, which takes in the arguments: `cellData`, `domContainer`, `cellObject`."),
  cellEditor: z.nativeEnum(CellEditorEnum).or(z.boolean())
    .optional()
    .describe("Turns cell editing on or off. Automatically turned on when setting `editor` or `editor-controls`."),
  cellFocus: z.nativeEnum(CellEditorEnum)
    .optional()
    .describe("Turns off keyboard nav cell focus if set to disabled"),
  cellTooltipAction: z.nativeEnum(CellTooltipActionEnum)
    .optional()
    .describe("Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon"),
  cellTooltipDelay: z.number()
    .optional()
    .describe("Sets the hover delay in milliseconds before displaying the tooltip. If delay is not specified, it is 1000ms on cell tooltips without an icon and 0ms on cell tooltips with an icon."),
  cellTooltipIcon: z.nativeEnum(CellTooltipIconEnum)
    .optional()
    .describe("Specifies the icon to use for the info column types"),
  cellTooltipPosition: z.nativeEnum(CellTooltipPositionEnum)
    .optional()
    .describe("Sets the tooltip-position for the cell"),
  cellTooltipRenderer: z.string()
    .optional()
    .describe("Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content"),
  cellTooltipTemplate: z.string()
    .optional()
    .describe("Points to an external template element to be used as the template for the tooltip display"),
  cellTooltipType: z.nativeEnum(CellTooltipTypeEnum)
    .optional()
    .describe("Sets the style to use for the tooltips. Uses the `default` style by default. Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`."),
  colClass: z.string()
    .optional()
    .describe("Adds a class to each `<zg-cell>` in targeted `<zg-column>`. To apply a class conditionally, set the value to the name of the function to run on each cell value. The function takes the parameters `fieldIndex`, `domContainer`, and `colObject`, and returns a string which is the class name to apply."),
  columnDrag: z.boolean()
    .optional()
    .describe("Enables column dragging"),
  columnDragAction: z.nativeEnum(ColumnDragActionEnum)
    .optional()
    .describe("Specifies the action of dragging allowed. By default, if `column-drag` is enabled then `column-drag-action` is set `\"both\"`. This property will turn on column-drag if not already set."),
  columnResizable: z.boolean()
    .optional()
    .describe("Presence of attribute turns on column resizing for all columns. This excludes internal column types (), which requires setting ZGColumn[resizable] on the column."),
  columnResizableMaxWidth: z.number()
    .optional()
    .describe("Sets the maximum width columns can be set to when resizing"),
  columnResizableMinWidth: z.number()
    .optional()
    .describe("Sets the minimum width columns can be set to when resizing"),
  columnResizablePersistent: z.boolean()
    .optional()
    .describe("Presence of attribute displays column resizing for all columns without hover"),
  columnWidth: z.nativeEnum(ColumnWidthEnum).or(z.string().regex(/\d*\.?\d+(px|%)?/)).or(z.number())
    .optional()
    .describe("Sets the width each of the columns"),
  columns: z.array(z.object({
    align: z.nativeEnum(AlignEnum)
      .optional()
      .describe("Aligns the contents of the cell"),
    arrayIndex: z.string()
      .optional()
      .describe("If the index is an array of objects, use array-index to indicate which index of the array object to include"),
    arraySlice: z.string().or(z.number())
      .optional()
      .describe("If the index is an array, you can use array-slice to indicate which array indexes to include."),
    buttonBorder: z.nativeEnum(CellEditorEnum).or(z.boolean())
      .optional()
      .describe("Presence of attribute forces a border on the button. Setting to `disabled` removes the default border."),
    cellBreak: z.nativeEnum(CellBreakEnum)
      .optional()
      .describe("The type of `word-break` style for body cells. When not set, `cell-break` style is `normal` by default. If the width of a column is set, `cell-break` is `word` by default."),
    cellClass: z.string()
      .optional()
      .describe("The class to be set directly on `<zg-cell>` within the column. `cell-class` applied to `<zg-column>` will overwrite the `cell-class` applied to `<zing-grid>`."),
    cellTooltipAction: z.nativeEnum(CellTooltipActionEnum)
      .optional()
      .describe("Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon"),
    cellTooltipDelay: z.number()
      .optional()
      .describe("Sets the hover delay in milliseconds before displaying the tooltip"),
    cellTooltipIcon: z.nativeEnum(CellTooltipIconEnum)
      .optional()
      .describe("Specifies the icon to use for the cell tooltip trigger icon when using the info column type"),
    cellTooltipPosition: z.nativeEnum(CellTooltipPositionEnum)
      .optional()
      .describe("Sets the tooltip-position for the cell"),
    cellTooltipRenderer: z.string()
      .optional()
      .describe("Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content"),
    cellTooltipTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the tooltip display"),
    cellTooltipText: z.string()
      .optional()
      .describe("Sets the tooltip text for the cell of the column. Can pass this value to renderer or template if using"),
    cellTooltipType: z.nativeEnum(CellTooltipTypeEnum)
      .optional()
      .describe("Sets the style to use for the tooltips. Uses the `default` style by default. Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`."),
    contentStyle: z.string()
      .optional()
      .describe("When an additional HTML element is added to the renderer, as in the case of image and url, `content-style` will be put into a style attribute directly on the element."),
    contentWidth: z.string().regex(/\d+px/).or(z.number())
      .optional()
      .describe("Sets the width of the content inside of the cell. Used on cells of column type `element`, `iframe`, `image`, or `url`."),
    defaultDisplay: z.string()
      .optional()
      .describe("The data to display in each cell where the data value is null or undefined"),
    detailsRenderer: z.string()
      .optional()
      .describe("Renderer for the details page of a column. To use a custom renderer, the attribute should be set to the name of the function. The renderer function takes in the following arguments, `value of index` (for each index), `domCell`, and `cellObject`. The returned value of the renderer function is set as the innerHTML of the details dialog."),
    detailsTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the column's details"),
    drag: z.nativeEnum(CellEditorEnum)
      .optional()
      .describe("Disables the drag state of a specific column when `column-drag` enabled on `<zing-grid>`"),
    editor: z.boolean().or(z.string())
      .optional()
      .describe("Overrides the default editor for the column. Can be set to a different built-in editor (based on type of column), custom editor, or `false` to turn off editor. If set to a custom editor, the attribute value should be set to the name of the object. See \"Features\" page on \"Editing: Custom Editor Grid\" for more details on custom editor."),
    editorTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the column's editor"),
    filter: z.nativeEnum(FilterEnum).or(z.boolean())
      .optional()
      .describe("Overrides the grid level `filter` attribute. Presence of attribute enables the menu on `filter` column. Can be set to `inline`, `menu`, `both`, or `disabled`"),
    filterButtons: z.nativeEnum(FilterButtonsEnum).or(z.string().regex(/^(reset|close|apply)(,\s?(reset|close|apply))*$/))
      .optional()
      .describe("Comma separated list of buttons to display on the filter menu"),
    filterConditions: z.nativeEnum(FilterConditionsEnum).or(z.string())
      .optional()
      .describe("The list of conditions to present as options in the filter menu condition select. Use \"break\" to display the horizontal separator. Use \"default\" to use the built in default. Can also be any custom string representing a function name."),
    filterConditionsDisplay: z.number()
      .optional()
      .describe("Number of conditions to display in the filter menu on menu open"),
    filterConditionsMax: z.number()
      .optional()
      .describe("Max number of conditions to display in the filter menu"),
    filterDefaultCondition: z.nativeEnum(FilterConditionsEnum).or(z.string())
      .optional()
      .describe("The condition to initially display on filter menu open. Can also be any custom string representing a function name."),
    filterIndex: z.string()
      .optional()
      .describe("Sets the data field index to filter on if index itself has multiple fields. The value set in index is the default."),
    filterKey: z.string()
      .optional()
      .describe("Sets the key for server side filtering. By default the filterKey is set to the filterIndex value."),
    filterMenuAreas: z.nativeEnum(FilterMenuAreasEnum)
      .optional()
      .describe("The areas to display in the filter menu. Can be conditions, selectbox, or both"),
    filterOn: z.nativeEnum(FilterOnEnum)
      .optional()
      .describe("Determines if the filter comparison should be against the raw values or the rendered This only applies to conditionals in the filter menu. For iframe column type, it is restricted to raw values. For aggregate column type, it is restricted to rendered values."),
    filterSelectboxDisplay: z.nativeEnum(FilterOnEnum)
      .optional()
      .describe("Determines if the selectbox in the filter menu should display the values as raw or rendered values."),
    filterTrigger: z.nativeEnum(FilterTriggerEnum)
      .optional()
      .describe("Action that fires the filter event from the filter menu."),
    filterer: z.string()
      .optional()
      .describe("Overrides the default filterer for the column. Can be set to a different built-in filterer or to a custom filterer<br> If set to a custom filterer, the attribute value should either be set to the object that contains: `init`, `afterInit`, `value`, `setValue`, and `triggerEvent` OR it can be set to a function that will be used for the `value` method which will fire on filter change. Note that the custom filterer only applies to the inline filter and not the conditions or select box options (filter menu)."),
    footCell: z.nativeEnum(AggregateEnum).or(z.string())
      .optional()
      .describe("The aggregate function, tokenized string, or function to evaluate for the foot cell of the column. If using a function, the function takes the parameters `columnData` and `columnFieldIndex`."),
    frozen: z.nativeEnum(FrozenEnum)
      .optional()
      .describe("Moves the column to the frozen panel specified"),
    group: z.boolean()
      .optional()
      .describe("Includes the column to the row-group column. To enable features on grouped row columns, set attributes on `ZGColumn[type=\"row-group\"]`. All other attributes on the `[group]` column(s) are ignored."),
    groupHeadCell: z.nativeEnum(AggregateEnum).or(z.string())
      .optional()
      .describe("Sets a head cell on the column in the grouped row."),
    headCell: z.nativeEnum(AggregateEnum).or(z.string())
      .optional()
      .describe("The aggregate function to evaluate for the head cell of the column. If using a function, the function takes the parameters `columnData` and `columnFieldIndex`."),
    header: z.string()
      .optional()
      .describe("The header name for the column. If it is not set, the default is to format the `index` value."),
    headerAutoFormat: z.nativeEnum(CellEditorEnum).or(z.string())
      .optional()
      .describe("Setting to `disabled` will turn off formatting on the header of the column. By default, headers will convert camel, dash, or kebab case to a properly spaced and capitalized string. Or set to a function name to customize formatting of header text. The custom function takes in two parameters, `index` and `headerText`, and returns the formatted header text."),
    headerIconPosition: z.nativeEnum(HeaderIconPositionEnum)
      .optional()
      .describe("Sets the header icon position in the header cells"),
    headerTooltipAction: z.nativeEnum(CellTooltipActionEnum)
      .optional()
      .describe("Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon"),
    headerTooltipDelay: z.number()
      .optional()
      .describe("Sets the hover delay in milliseconds before displaying the header tooltip"),
    headerTooltipIcon: z.string()
      .optional()
      .describe("Specifies the icon to use for the header tooltip trigger icon"),
    headerTooltipIconPosition: z.nativeEnum(HeaderIconPositionEnum)
      .optional()
      .describe("Sets the tooltip icon position for the tooltip icon in the header cells"),
    headerTooltipPosition: z.nativeEnum(CellTooltipPositionEnum)
      .optional()
      .describe("Sets the tooltip-position for the header cell"),
    headerTooltipRenderer: z.string()
      .optional()
      .describe("Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content"),
    headerTooltipTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the tooltip display"),
    headerTooltipText: z.string()
      .optional()
      .describe("Sets the tooltip text for the header cell of the column. Can pass this value to renderer or template if using"),
    headerTooltipTrigger: z.nativeEnum(HeaderTooltipTriggerEnum)
      .optional()
      .describe("Sets what part of the header triggers the tooltip. If set to 'icon', an info icon is added to the header."),
    headerTooltipType: z.nativeEnum(CellTooltipTypeEnum)
      .optional()
      .describe("Sets the style to use for the tooltips. Uses the `default` style by default. Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`."),
    headerIcon: z.string()
      .optional()
      .describe("Adds an icon next to the header text."),
    hidden: z.boolean()
      .optional()
      .describe("Presence of attribute hides the column"),
    index: z.string()
      .optional()
      .describe("A single index or multiple indices (separated by comma), to associate information in the data source to a column in the grid. Nested data keys are referenced by the member character `.` (Ex. data.key)."),
    locale: z.string()
      .optional()
      .describe("Localization code used with column type `currency` and `number`"),
    menuText: z.string()
      .optional()
      .describe("The text to display in the control menu for the column. If it is not set, it is set to the header text."),
    minWidth: z.number()
      .optional()
      .describe("Sets the minimum width of the column in pixels"),
    renderer: z.string()
      .optional()
      .describe("Overrides the default renderer for the column. Can be set to a different built-in or custom renderer. To use a custom renderer, the attribute should be set to the name of the function. The renderer function takes in the following arguments, `value of index` (for each index), `domCell`, and `cellObject`. The returned value of the renderer function is set as the innerHTML of the cell."),
    rendererTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the column's renderer"),
    required: z.boolean()
      .optional()
      .describe("Indicates that the column is required to have a value on edit"),
    resizable: z.nativeEnum(CellEditorEnum).or(z.boolean())
      .optional()
      .describe("Turns on column resizing for single column. Set to `disabled` to turn off resizing on a single column."),
    resizableMaxWidth: z.number()
      .optional()
      .describe("Sets the maximum width the column can be set to when resizing"),
    resizableMinWidth: z.number()
      .optional()
      .describe("Sets the minimum width the column can be set to when resizing"),
    resizablePersistent: z.boolean()
      .optional()
      .describe("Modifies the default column resizable persistence. Set to `disabled` to turn off persistence on a single column."),
    search: z.nativeEnum(CellEditorEnum)
      .optional()
      .describe("Turns off the search on a column if `search` is present on `<zing-grid>`"),
    separator: z.string()
      .optional()
      .describe("If multiple indices are set, this is the string that separates them in the display. By default, it is a comma."),
    sort: z.nativeEnum(CellEditorEnum)
      .optional()
      .describe("Turns off the sort on a column if `sort` is present on `<zing-grid>`"),
    sortAsc: z.boolean()
      .optional()
      .describe("Presence of attribute sorts the column data in ascending order"),
    sortDesc: z.boolean()
      .optional()
      .describe("Presence of attribute sorts the column data in descending order"),
    sortIntl: z.nativeEnum(CellEditorEnum)
      .optional()
      .describe("Overrides default behavior for setting special sort for international data"),
    sorter: z.string()
      .optional()
      .describe("Overrides the default sorter for the column. It is also possible to override the column sorting by passing in method name of sort function instead or setting to `disabled` to disable sorting. Sorter function takes in two values (a, b) and returns 1, -1, or 0 indicating if `a > b`, `a < b`, or `a = b`. Can also be set to a path in the dataset to perform the sort on. This is useful for sorting object indices."),
    type: z.nativeEnum(TypeEnum)
      .optional()
      .describe("The type of the data stored in the column. The column renderer/editor will behave based on the column type."),
    typeAggregateOmit: z.boolean()
      .optional()
      .describe("Presence of attribute ignores the column in aggregation calculations"),
    typeAggregateValue: z.nativeEnum(AggregateEnum).or(z.string())
      .optional()
      .describe("The token or aggregate value to use to display if the column is an aggregation column"),
    typeButtonDisabled: z.boolean()
      .optional()
      .describe("Presence of attribute sets the button to be in a disabled state. Can also set to \"true\" or \"false\"."),
    typeButtonHandler: z.string()
      .optional()
      .describe("When the column type is set to `button`, use `typeButtonHander` to hook up a function call to the button click. Callback receives rowData, zg-cell DOM, and zg-cell object as arguments."),
    typeButtonIcon: z.string()
      .optional()
      .describe("When the column type is set to `button`, use `typeButtonIcon` to add an icon next to the rendered button in the cell"),
    typeButtonLabel: z.string()
      .optional()
      .describe("When the column type is set to `button`, use `typeButtonLabel` to add a label to the rendered button in the cell"),
    typeButtonTooltip: z.string()
      .optional()
      .describe("When the column type is set to `button`, use `typeButtonTooltip` to add a tooltip to the rendered button in the cell"),
    typeButtonUrl: z.string()
      .optional()
      .describe("When the column type is set to `button`, use `typeButtonURL` to add a shortcut handler on button click. The click will automatically open the url in a new window."),
    typeCheckboxLabel: z.string()
      .optional()
      .describe("When the column type is set to `checkbox`, use `typeCheckboxLabel` to add a label next to the rendered checkbox in the cell"),
    typeColorMode: z.string()
      .optional()
      .describe("Sets the color mode to configure the color picker. Choose between HSL, RGBA, and the default Hex."),
    typeColorPreview: z.nativeEnum(CellEditorEnum)
      .optional()
      .describe("Disable the default color swatch UI preview with a false value."),
    typeColorSpaces: z.nativeEnum(CellEditorEnum)
      .optional()
      .describe("By default, spaces are added into the color when in RGB or HSL mode. Turn the spaces off by setting to `disabled`"),
    typeCurrency: z.string()
      .optional()
      .describe("The currency to be used in currency formatting. Currency is set using using the 3 letter currency code specified by ISO 4217 specification (https://en.wikipedia.org/wiki/ISO_4217)"),
    typeDateFormat: z.string()
      .optional()
      .describe("The tokenized formatting for a date column"),
    typeDateFromNow: z.boolean()
      .optional()
      .describe("Indicates if date should be displayed in FromNow format"),
    typeElementAttributeName: z.string()
      .optional()
      .describe("Sets the attribute of the custom-element in the column when `<zg-column>` has `type` set to `element`"),
    typeElementTagName: z.string()
      .optional()
      .describe("Sets the tag to wrap content when `<zg-column>` has `type` set to `element`. If `type-element-attribute-name` isn't set, it will put the rendered data into the body of the element. If `type-element-attribute-name` is set, it will set the attribute to the indexed value."),
    typeEmojiShortcode: z.string()
      .optional()
      .describe("Set to function to convert shortcodes to emojis"),
    typeGroupHideCount: z.boolean()
      .optional()
      .describe("Presence of the attribute disables the display of the row count on the row-group column"),
    typeGroupPlural: z.string()
      .optional()
      .describe("Indicates the word to use if the count is plural or singular. Comma separated with singular first. The word can be referenced by the token `group.plural` and is used in a renderer or template."),
    typeIframeRatio: z.nativeEnum(TypeIframeRatioEnum)
      .optional()
      .describe("Sets a \"square\" ratio instead of the default \"16:9\""),
    typeImageAlt: z.string()
      .optional()
      .describe("The alternative text used with the `image` type column"),
    typeImageMask: z.nativeEnum(TypeImageMaskEnum)
      .optional()
      .describe("The alternative shape to mask the image"),
    typeImageSrc: z.string()
      .optional()
      .describe("If the column type is `image`, use the `type-image-src` attribute to set the src for the image. The src will be the index value by default."),
    typeNumberDecimals: z.number()
      .optional()
      .describe("Indicates the exact numbers to display after the decimal"),
    typeNumberFormatting: z.nativeEnum(CellEditorEnum)
      .optional()
      .describe("Set to \"disabled\" to turn off default number formatting"),
    typeNumberMaxDecimals: z.number()
      .optional()
      .describe("Indicates the maximum numbers to display after the decimal"),
    typeNumberMinDecimals: z.number()
      .optional()
      .describe("Indicates the minimum numbers to display after the decimal"),
    typeRadioOptions: z.array(z.object({ name: z.string(), value: z.string() })).or(z.string())
      .optional()
      .describe("When the column type is set to `radio`, use `typeRadioOptions` to add rendered radio options in the cell. Can also set as array of name/value pairs where the name is displayed for the given value"),
    typeRangeMax: z.number()
      .optional()
      .describe("Maximum value for the input box. Used with the `range` type column in edit mode."),
    typeRangeMin: z.number()
      .optional()
      .describe("Minimum value for the input box. Used with `range` type column in edit mode."),
    typeRangeStep: z.number()
      .optional()
      .describe("Specifies the step between each legal value for the input box. Used with `range` type column in edit mode."),
    typeRowDetailsRenderer: z.string()
      .optional()
      .describe("Renderer for the row details component To use a custom renderer, the attribute should be set to the name of the function. The renderer function takes in the following arguments, `recordData`, `domRowDetails`, and `rowObject` The returned value of the renderer function is set as the innerHTML of the zg-row-details component."),
    typeRowDetailsTemplate: z.string()
      .optional()
      .describe("Points to an external template element to be used as the template for the row's details"),
    typeSelectDefaultValue: z.string()
      .optional()
      .describe("The default value of a new record. The select box in the create record will default to the specified value."),
    typeSelectMultiple: z.boolean()
      .optional()
      .describe("In edit mode, presence of attribute allows column type `select` to have multiple selections, instead of the default of a single selection"),
    typeSelectOptions: z.array(z.object({ name: z.string(), value: z.string() })).or(z.string())
      .optional()
      .describe("To set the options for the select box for a `select` column when `editor` is enabled on `<zing-grid>`. Can also set as array of name/value pairs where the name is displayed for the given value"),
    typeSelectorPagePersist: z.boolean()
      .optional()
      .describe("Keeps the selected rows selected even on page change. This means that rows can be selected and not on the current page."),
    typeToggleOptions: z.array(z.string())
      .optional()
      .describe("When the column type is set to `toggle`, use `typeToggleOptions` to set the list of options for the display."),
    typeToggleRenderValue: z.boolean()
      .optional()
      .describe("When the column type is set, the render and value will be the same. This prevents the default creating of true/false for toggles."),
    typeUrlIcon: z.nativeEnum(TypeUrlIconEnum)
      .optional()
      .describe("If the column type is `url`, use this attribute to reference any `<zg-icon>` within the library to replace the link text with this icon."),
    typeUrlSrc: z.string()
      .optional()
      .describe("If the column type is `url`, use the `type-url-src` attribute to set the src for the link. The link will be the index value by default."),
    typeUrlTarget: z.string()
      .optional()
      .describe("If the column type is `url`, use this attribute to set the target window of the click. Uses the same values as HTML `<a>` `[target]` attribute. `_blank` by default"),
    typeUrlText: z.string()
      .optional()
      .describe("If the column type is `url`, use the `type-url-text` attribute to set the text displayed for the link."),
    validationErrorMessage: z.string()
      .optional()
      .describe("Sets the validation error message for the column. Overrides any other settings."),
    validationRequiredMessage: z.string()
      .optional()
      .describe("Sets the validation required message for the column. Overrides any other settings."),
    width: z.nativeEnum(WidthEnum).or(z.string().regex(/\d*\.?\d+(px|%)?/)).or(z.number())
      .optional()
      .describe("Sets the width of the column. Can also be any custom string representing a percentage value (10%) or pixel value (150px)."),
  }).strict())
    .optional()
    .describe("Specifies the columns of the grid. More appropriate to use `<zg-column>` in most cases or set the property programmatically."),
  columnsControl: z.boolean()
    .optional()
    .describe("Presence of attribute turns on the menu to show and hide columns"),
  compact: z.boolean()
    .optional()
    .describe("Augments internal themes to a compact mode"),
  confirmDelete: z.nativeEnum(CellEditorEnum)
    .optional()
    .describe("Turns off delete confirmation if set to disable"),
  confirmations: z.nativeEnum(ConfirmationsEnum)
    .optional()
    .describe("Sets which confirmation dialogs to display on batch editing and deleting"),
  contextMenu: z.string().or(z.boolean())
    .optional()
    .describe("Enables the default `<zing-grid>` context menu or set to the id name of a custom `<zg-menu>`. If set to a custom menu and `<zg-menu>` has the `replace` attribute present, then the custom menu will replace the context menu. Otherwise the contents of the custom menu is appended to the end of context menu. Can also set to `\"browser\"` to use the browser's built in context-menu Note that the `\"browser\"` context-menu cannot be used together with a custom static-menu."),
  creator: z.nativeEnum(CreatorEnum).or(z.boolean())
    .optional()
    .describe("Sets the create editor to modal (default) or inline."),
  data: z.array(z.any()).or(z.record(z.string(), z.any()))
    .optional()
    .describe("Data for the grid presented as an array or object"),
  defaultDisplay: z.string()
    .optional()
    .describe("The data to display in each cell where the data value is null or undefined"),
  dialog: z.boolean()
    .optional()
    .describe("Sets `<zg-dialog>` to display dialog and mask within the grid dimensions instead of the whole screen"),
  dir: z.nativeEnum(DirEnum)
    .optional()
    .describe("The HTML standard direction to indicate direction of grid's columns and text"),
  editor: z.nativeEnum(EditorEnum).or(z.boolean())
    .optional()
    .describe("Turns on the grid editor. Enables single cell editing via double click. Sets the editor to inline (default) or modal."),
  editorControls: z.nativeEnum(EditorControlsEnum).or(z.boolean())
    .optional()
    .describe("Adds columns for the editor controls. If it is added, default is \"all\"."),
  editorDisabledFields: z.string()
    .optional()
    .describe("Comma separated list of indexes to turn off editor functionality on. Mimes the functionality of [\"editor=disabled\"] on `<zg-column>`"),
  filter: z.nativeEnum(FilterEnum).or(z.boolean())
    .optional()
    .describe("Enables filtering for all columns. Can be turned on/off individually via column. Can be set to \"inline\" or \"menu\" Default is \"menu\""),
  filterButtons: z.nativeEnum(FilterButtonsEnum).or(z.string().regex(/^(reset|close|apply)(,\s?(reset|close|apply))*$/))
    .optional()
    .describe("Comma separated list of buttons to display in the specified order on the filter menu"),
  filterConditions: z.nativeEnum(FilterConditionsEnum).or(z.string())
    .optional()
    .describe("The list of conditions to present as options in the filter menu condition select. Use \"break\" to display the horizontal separator. Use \"default\" to use the built in default. Can also be any custom string representing a function name."),
  filterConditionsDisplay: z.number()
    .optional()
    .describe("Number of conditions to display in the filter menu on menu open"),
  filterConditionsMax: z.number()
    .optional()
    .describe("Max number of conditions to display in the filter menu"),
  filterDefaultCondition: z.nativeEnum(FilterConditionsEnum).or(z.string())
    .optional()
    .describe("The condition to initially display on filter menu open. Can also be any custom string representing a function name."),
  filterMenuAreas: z.nativeEnum(FilterMenuAreasEnum)
    .optional()
    .describe("The areas to display in the filter menu. Can be conditions, selectbox, or both"),
  filterOn: z.nativeEnum(FilterOnEnum)
    .optional()
    .describe("Determines if the filter comparison should be against the raw values or the rendered. This only applies to conditionals in the filter menu. For iframe column type, it is restricted to raw values. For aggregate column type, it is restricted to rendered values."),
  filterSelectboxDisplay: z.nativeEnum(FilterOnEnum)
    .optional()
    .describe("Determines if the selectbox in the filter menu should display the values as raw or rendered values."),
  filterTrigger: z.nativeEnum(FilterTriggerEnum)
    .optional()
    .describe("Action that fires the filter event from the filter menu."),
  footClass: z.string()
    .optional()
    .describe("Adds a class to each `<zg-cell>` in the `<zg-foot>`. To apply a class conditionally, set the value to the name of the function to run on each cell value. The function takes the parameters `fieldIndex`, `domContainer`, and `colObject`, and returns a string which is the class name to apply."),
  frozenColumnsLeft: z.number()
    .optional()
    .describe("Sets the number of columns to freeze to the left"),
  frozenColumnsRight: z.number()
    .optional()
    .describe("Sets the number of columns to freeze to the right"),
  frozenRowClass: z.string()
    .optional()
    .describe("Adds a class to each `<zg-row>` element. To apply a class conditionally, set the value to the name of the function to run on each cell value. The function takes the parameters `data`, `rowIndex` (1-based), `domRow`, and `rowObject`, `rowParent`, and returns a string which is the class name to apply."),
  frozenRowsBottom: z.number()
    .optional()
    .describe("Sets the number of rows to freeze to the bottom"),
  frozenRowsTop: z.number()
    .optional()
    .describe("Sets the number of rows to freeze to the top"),
  gridlines: z.nativeEnum(GridlinesEnum)
    .optional()
    .describe("Sets vertical, horizontal or both grid lines to the grid when in row mode"),
  groupBy: z.string()
    .optional()
    .describe("Sets the index fields to group on."),
  headClass: z.string()
    .optional()
    .describe("Adds a class to each `<zg-cell>` in the `<zg-head>`. To apply a class conditionally, set the value to the name of the function to run on each cell value. The function takes the parameters `fieldIndex`, `domContainer`, and `colObject`, and returns a string which is the class name to apply."),
  headerAutoFormat: z.nativeEnum(CellEditorEnum).or(z.string())
    .optional()
    .describe("Converts camel, dash, and kebab case to properly spaced and capitalized typography. Setting to `disabled` will turn off formatting on headers. Set to a function name to customize formatting of headers."),
  headerRowHide: z.boolean()
    .optional()
    .describe("Hides any header rows"),
  headerTooltipAction: z.nativeEnum(CellTooltipActionEnum)
    .optional()
    .describe("Sets the execution method of custom 'icon' type tooltips to either activate on hover or click of the icon"),
  headerTooltipDelay: z.number()
    .optional()
    .describe("Sets the hover delay in milliseconds before displaying the header tooltip"),
  headerTooltipIcon: z.string()
    .optional()
    .describe("Specifies the icon to use for the header tooltip trigger icon"),
  headerTooltipIconPosition: z.nativeEnum(HeaderIconPositionEnum)
    .optional()
    .describe("Sets the tooltip icon position for the tooltip icon in the header cells"),
  headerTooltipPosition: z.nativeEnum(CellTooltipPositionEnum)
    .optional()
    .describe("Sets the tooltip-position for the header cell"),
  headerTooltipRenderer: z.string()
    .optional()
    .describe("Gets the name of the user's custom render function, on window, to use the function's return value as the tooltip content"),
  headerTooltipTemplate: z.string()
    .optional()
    .describe("Points to an external template element to be used as the template for the tooltip display"),
  headerTooltipTrigger: z.nativeEnum(HeaderTooltipTriggerEnum)
    .optional()
    .describe("Sets what part of the header triggers the tooltip. If set to 'icon', an info icon is added to the header."),
  headerTooltipType: z.nativeEnum(CellTooltipTypeEnum)
    .optional()
    .describe("Sets the style to use for the tooltips. Uses the `default` style by default. Can set to `system` to match the tooltips used on icons throughout `<zing-grid>`."),
  height: z.string().regex(/\d*\.?\d+(px|%)?/).or(z.number())
    .optional()
    .describe("Sets the height of the grid. If the height is less than the size of the content, scrolling is added to grid body."),
  iconSet: z.string()
    .optional()
    .describe("Allows the user to change the grid icon set to an allowed 3rd-party type (e.g., Font-Awesome). To use a custom icon set, the icon set must first be registered."),
  lang: z.string()
    .optional()
    .describe("Sets the language to use for the grid"),
  layout: z.nativeEnum(LayoutEnum)
    .optional()
    .describe("Sets the grid layout to be either `card` or `row` and adds `<zg-layout-controls>` to the grid. The default is based on the size of the user's screen, unless `layout` is set."),
  layoutControls: z.nativeEnum(CellEditorEnum).or(z.boolean())
    .optional()
    .describe("When `layout` is set, by default `layout-controls` is enabled. To hide, set `layout-controls` to `disabled`. Presence of this attribute will enable `<zg-layout-controls>` even if `layout` is not set."),
  loading: z.boolean()
    .optional()
    .describe("Presence of attribute adds loading state to grid, which triggers `<zg-load-mask>` to show. This attribute allows styling the height of the grid (via CSS) before the data has loaded in the grid."),
  loadingText: z.string()
    .optional()
    .describe("Sets the text to display in the `<zg-load-mask>` on data load"),
  loadmask: z.nativeEnum(CellEditorEnum)
    .optional()
    .describe("Set `loadmask=\"disabled\"` to prevent the `<zg-load-mask>` from showing on data load."),
  nestedDataSeparator: z.nativeEnum(NestedDataSeparatorEnum).or(z.string())
    .optional()
    .describe("Indicates separator that should be used for nested headers and data paths. By default, the '.' is used: 'fullName.first' Setting to `disabled` will turn off parsing for nested headers and will not look at pathing for data"),
  noData: z.string()
    .optional()
    .describe("Sets the message that appears in the `<zg-no-data>` element when there are no records"),
  pageSize: z.number()
    .optional()
    .describe("Sets the number of records or rows to display per page. Can be set only if `pager` is set."),
  pageSizeCard: z.number()
    .optional()
    .describe("Sets the number of cards to display per page when in card mode. Can be set only if `pager` is set."),
  pageSizeOptions: z.string().regex(/^\d+(,\d+)*$/)
    .optional()
    .describe("Sets the options for page size in `zg-option-list`. Can be set only if `pager` is set."),
  pageSizeRow: z.number()
    .optional()
    .describe("Sets the number of rows to display per page when in row mode. Can be set only if `pager` is set."),
  pager: z.boolean()
    .optional()
    .describe("Adds pagination functionality and controls to the grid"),
  pagerButtonLimit: z.number()
    .optional()
    .describe("Determines max number of page buttons to display. Default is 5."),
  pagerPosition: z.nativeEnum(PagerPositionEnum)
    .optional()
    .describe("Sets pager position. Note: `pager` attribute or `<zg-pager>` must be present in order to position pager."),
  pagerType: z.nativeEnum(PagerTypeEnum)
    .optional()
    .describe("Determines which type of pagination to use, input or buttons"),
  params: z.array(z.object({
    name: z.nativeEnum(ZGParamEnum)
      .describe("Name of parameter"),
    value: z.string()
      .describe("The value for given data key. If the value is an object, format as JSON encoded version of string."),
  }))
    .optional()
    .describe("Name/Value pairs of `<zg-param>` values. More appropriate to use `<zg-param>` in most cases."),
  preserveStateId: z.string()
    .optional()
    .describe("The ID to use as the key in storing the state. Each grid should have a unique ID or else the state data will be shared across grids."),
  preserveStateLoad: z.string()
    .optional()
    .describe("The method to call when state is ready to be retrieved. Must also set preserveStateSave and preserveStateId"),
  preserveStateOptions: z.string()
    .optional()
    .describe("Comma separated list of features to save in state preservation. Options are 'columnfrozen', 'columnposition', 'columnvisibility', 'columnwidth', 'filter', 'rowgroup', 'layout', 'page', 'pagesize', 'rowfrozen', 'rowgroup', 'rowselector', 'search', 'selector', 'sort' NOTE: If columnfrozen is set, then columnposition will implicitly be set as well"),
  preserveStateSave: z.string()
    .optional()
    .describe("The method to call when state is ready to be saved. Must also set preserveStateLoad and preserveStateId."),
  recordCount: z.number()
    .optional()
    .describe("Sets the total record count. Useful for `loadByPage` when the response packet does not return total count of records."),
  recordDuplicate: z.boolean()
    .optional()
    .describe("Adds the duplicate control to the end of the row before the edit controls"),
  recordKey: z.string().or(z.boolean())
    .optional()
    .describe("Adds the record key column to the grid. If set to a string, the string is the header text."),
  rowClass: z.string()
    .optional()
    .describe("Adds a class to each `<zg-row>` element. To apply a class conditionally, set the value to the name of the function to run on each cell value. The function takes the parameters `data`, `rowIndex` (1-based), `domRow`, and `rowObject`, `rowParent`, `bodyRowIndex` (1 based), and returns a string which is the class name to apply."),
  rowDetailsRenderer: z.string()
    .optional()
    .describe("Renderer for the row details component To use a custom renderer, the attribute should be set to the name of the function. The renderer function takes in the following arguments, `recordData`, `domRowDetails`, and `rowObject` The returned value of the renderer function is set as the innerHTML of the zg-row-details component."),
  rowDetailsTemplate: z.string()
    .optional()
    .describe("Points to an external template element to be used as the template for the row's details"),
  rowHeight: z.nativeEnum(RowHeightEnum).or(z.string().regex(/\d+px/)).or(z.number())
    .optional()
    .describe("Sets the height of each data row. By default, the body row height is set to 'auto' where it will auto fit the content. If you wish to apply the height to rows besides data row, specify with the `[rowHeightScope]` attribute."),
  rowHeightScope: z.nativeEnum(RowHeightScopeEnum)
    .optional()
    .describe("If `[rowHeight]` is set, it specifies which rows to apply row height to. Choices are `data`, `headers, and `all`. Can combine with comma separated list"),
  rowSelector: z.boolean()
    .optional()
    .describe("Adds `selector` type column to the rows as the first column"),
  search: z.boolean()
    .optional()
    .describe("Turns on the search feature and adds `<zg-search>` to the grid. The search button appears in the caption header."),
  selector: z.boolean()
    .optional()
    .describe("Turns on the selector feature on the grid and adds `<zg-selector-mask>` to the grid"),
  serverRendered: z.boolean()
    .optional()
    .describe("Indicates that the grid was completely rendered on the server and embedded in the page"),
  sort: z.boolean()
    .optional()
    .describe("Enables sorting on all columns. It is possible to disable specific columns via the column's object or setting `sort=\"disabled\"` to specified columns."),
  sortIntl: z.nativeEnum(CellEditorEnum)
    .optional()
    .describe("Overrides default behavior for international sorting. Turn off international sorting with `sort-intl=\"disabled\"`."),
  sorter: z.string()
    .optional()
    .describe("Override the column sorting by passing in method name of sort function instead. Sorter function takes in two values (a, b) and returns 1, -1, or 0 indicating if `a > b`, `a < b`, or `a = b`."),
  source: z.string()
    .optional()
    .describe("Defines the source of the data in the grid. Adds the `<zg-source>` element."),
  src: z.string()
    .optional()
    .describe("Specifies the absolute or relative URL to fetch data from to populate the grid"),
  staticMenu: z.boolean().or(z.string())
    .optional()
    .describe("Adds a display button that launches the contextmenu. If set to a custom menu and `<zg-menu>` has the `replace` attribute present, then the custom menu will replace the context-menu. Otherwise the contents of the custom menu is appended to the end of context menu. Note that custom static-menu cannot not be used together with a `\"browser\"` context-menu."),
  statusDelay: z.number()
    .optional()
    .describe("Changes the duration a status message will remain visible until it automatically closes (in milliseconds)"),
  statusPersist: z.boolean()
    .optional()
    .describe("Prevents status messages from automatically closing after a delay"),
  statusPosition: z.nativeEnum(StatusPositionEnum)
    .optional()
    .describe("Positions the status message in one of nine positions relative to the grid"),
  templateEndDelimiter: z.string()
    .optional()
    .describe("Defines the regex expression for closing data binding"),
  templateStartDelimiter: z.string()
    .optional()
    .describe("Defines the regex expression for starting data binding"),
  theme: z.nativeEnum(ThemeEnum).or(z.string())
    .optional()
    .describe("Sets the theme of the grid. Built-in themes are specified by keyword, but custom theme names are also accepted by setting a URL path to your custom css theme file. For custom themes, on load set `theme` to the path to the custom theme file. After, set to theme name to switch themes."),
  typeSelectorPagePersist: z.boolean()
    .optional()
    .describe("If there is a selector column, it maintains selection between pages. This means that rows can be selected and not on the current page."),
  validationErrorMessage: z.string()
    .optional()
    .describe("Sets the default validation error message"),
  validationRequiredMessage: z.string()
    .optional()
    .describe("Sets the default validation required message"),
  viewport: z.string()
    .optional()
    .describe("Internal attribute. Should not be set."),
  viewportPause: z.boolean()
    .optional()
    .describe("Keeps current value of `viewport` and freezes the breakpoint"),
  viewportStop: z.boolean()
    .optional()
    .describe("Removes `viewport` attribute, disabling viewport resizing"),
  viewportTypes: z.record(z.string(), z.number().or(z.null()))
    .optional()
    .describe("Sets custom `viewport` breakpoints (value string-object must be valid JSON). NOTE: If you don't set `mobile`, the grid won't auto-set card or row mode."),
  width: z.string().regex(/^\d+(\.\d+)?\s*(px|em|rem|%|vw|vh)$/).or(z.number())
    .optional()
    .describe("Sets the width of the grid. If the width is less than the size of the content, scroll is added to `<zg-body>`."),
  zebra: z.boolean().or(z.string())
    .optional()
    .describe("Presence of attribute adds the classes, `zebra-1` and `zebra-2`, alternating on `<zg-row>` elements. Setting to a list of class names will assign classes in sequential order. For conditional zebra classes, `zebra` also accepts name of function that returns a class name to use for zebra striping."),
}).strict();
