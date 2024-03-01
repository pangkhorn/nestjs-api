export enum CommonTypeEnum {
  CANDIDATE_TABLE = 'recruitment.candidates',
  REQUEST_FORM_TABLE = 'recruitment.request_forms',
  KANBAN_BOARD_TABLE = 'recruitment.kanban_boards',
  REQUEST_FORM_CANDIDATE_TABLE = 'recruitment.request_form_candidates',
  TASK_TABLE = 'recruitment.tasks',
  EMPLOYEE_TABLE = 'employees',
  NOTE_TABLE = 'recruitment.notes',
  POSITION_TABLE = 'positions',
  BRANCH_TABLE = 'branches',
  USER_TABLE = 'users',
  APPROVAL_MATRIX_STAGE_TABLE = 'recruitment.approval_matrix_stages',
  APPROVAL_MATRIX_STAGE_ACTOR_TABLE = 'recruitment.approval_matrix_stage_actors',
  APPROVAL_MATRIX_REPRESENT_TABLE = 'recruitment.approval_matrix_represents',
  REQUEST_FORM_APPROVAL_STAGE = 'recruitment.request_form_approval_stages',
}

export enum JobDescriptionStatus {
  PENDING = 'PENDING',
  UPDATED = 'UPDATED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export enum AdvertisingSourceEnum {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
  ANY = 'ANY',
}

export enum AdvertisingSourceEnumValues {
  INTERNAL = 'Internal Applicants',
  EXTERNAL = 'External Applicants',
  ANY = 'Any Applicants',
}
export const ToAdvertisingSourceEnumValues = (a: AdvertisingSourceEnum) => AdvertisingSourceEnumValues[a];
export enum AdvertisingChannelEnum {
  ABA_WEBSITE = 'ABA_WEBSITE',
  FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE = 'FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE',
  NON_FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE = 'NON_FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE',
  FACEBOOK = 'FACEBOOK',
  LINKEDIN = 'LINKEDIN',
  RECRUITER_CHANNEL = 'RECRUITER_CHANNEL',
  TELEGRAM = 'TELEGRAM',
  PHNOM_PENH_POST = 'PHNOM_PENH_POST',
  OTHERS = 'OTHERS',
}
export const DefaultChannels = [
  AdvertisingChannelEnum.ABA_WEBSITE,
  AdvertisingChannelEnum.FACEBOOK,
  AdvertisingChannelEnum.TELEGRAM,
  AdvertisingChannelEnum.LINKEDIN,
];

export enum AdvertisingChannelEnumValues {
  ABA_WEBSITE = 'ABA Bank Website',
  FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE = 'Fee Charged Local Job Board Websites',
  NON_FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE = 'Non-Fee Charged Local Job Board Websites',
  FACEBOOK = 'Facebook',
  LINKEDIN = 'LinkedIn',
  RECRUITER_CHANNEL = 'Recruiter Channel',
  TELEGRAM = 'Telegram',
  PHNOM_PENH_POST = 'Phnom Penh Post',
  OTHERS = 'Other',
}
export const ToAdvertisingChannelEnumValues = (a: AdvertisingChannelEnum) => AdvertisingChannelEnumValues[a];

export enum AgreementTypeEnum {
  PERMANENT = 'PERMANENT',
  TEMPORARY = 'TEMPORARY',
  PART_TIME = 'PART_TIME',
  TRAINEE = 'TRAINEE',
  INTERNSHIP = 'INTERNSHIP',
  OTHER = 'OTHER',
}

const AgreementTypeEnumValues = {
  PERMANENT: 'Permanent',
  TEMPORARY: 'Temporary',
  TRAINEE: 'Trainee',
  PART_TIME: 'Part-Time',
  INTERNSHIP: 'Internship',
  OTHER: 'Others',
};
export const ToAgreementTypeEnumValues = (a: AgreementTypeEnum) => AgreementTypeEnumValues[a];

export enum AdvertisingPeriodEnum {
  THREE_DAYS = 3,
  FIVE_DAYS = 5,
  TEN_DAYS = 10,
  OTHER = 0,
}

export enum AdvertisingPeriodDisplayEnum {
  THREE_DAYS = '3 Days',
  FIVE_DAYS = '5 Days',
  TEN_DAYS = '10 Days',
  OTHER = 'Other',
}

export enum EmployeeStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  RESIGNED = 'RESIGNED',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum RequestFormStatusEnum {
  STARTED = 'STARTED',
  PAUSED = 'PAUSED',
  APPROVED = 'APPROVED',
  CANCELED = 'CANCELED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  CLOSED = 'CLOSED',
  WAITING_YOUR_APPROVAL = 'WAITING_YOUR_APPROVAL',
}

export enum RequestFormJAEnum {
  NEW = 'NEW',
  APPROVED = 'APPROVED',
  MODIFIED = 'MODIFIED',
}

export enum RequestFormActionTypeEnum {
  CREATED = 'created',
  STARTED = 'started',
  REOPENED = 'reopened',
  CONTINUED = 'continued',
  PAUSED = 'paused',
  APPROVED = 'approved',
  UPDATED = 'updated',
  CANCELED = 'canceled',
  REJECTED = 'rejected',
  CLOSED = 'closed',
}

const RequestFormStatusValues = {
  STARTED: 'Started',
  PAUSED: 'On Hold',
  APPROVED: 'Approved',
  CANCELED: 'Canceled',
  PENDING: 'In Progress',
  REJECTED: 'Rejected',
  CLOSED: 'Closed',
  WAITING_YOUR_APPROVAL: 'Need Your Approval',
};

export const toRequestFormStatusValues = (t: RequestFormStatusEnum) => RequestFormStatusValues[t];

export enum BranchStatus {
  DRAFTED = 'DRAFTED',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum ChannelTypeEnum {
  EMAIL = 'EMAIL',
  FACEBOOK = 'FACEBOOK',
  LINKEDIN = 'LINKEDIN',
  REFERRAL = 'REFERRAL',
  AGENCY = 'AGENCY',
  OTHER = 'OTHER',
}

export enum DatabaseSchema {
  PUBLIC = 'public',
  RECRUITMENT = 'recruitment',
}

export enum ExpectToJoinDateEnum {
  THIS_WEEK = 'THIS_WEEK',
  THIS_MONTH = 'THIS_MONTH',
  NEXT_MONTH = 'NEXT_MONTH',
  ON_DATE = 'ON_DATE',
}

const ExpectToJoinDateValues = {
  THIS_WEEK: 'This Week',
  THIS_MONTH: 'This Month',
  NEXT_MONTH: 'Next Month',
  ON_DATE: 'On Date',
};

export const ToExpectToJoinDateValues = (expectToJoinDate: ExpectToJoinDateEnum) =>
  ExpectToJoinDateValues[expectToJoinDate];

export enum HiringReasonEnum {
  REPLACEMENT = 'REPLACEMENT',
  ADDITION = 'ADDITION',
  NEW = 'NEW',
}

const HiringReasonEnumValues = {
  REPLACEMENT: 'Replacement',
  ADDITION: 'Addition',
  NEW: 'New',
};

export const ToHiringReasonEnumValues = (h: HiringReasonEnum) => HiringReasonEnumValues[h];

export enum PositionStatus {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CANCELED = 'CANCELED',
}

export enum QualificationTypeEnum {
  BACHELOR = 'BACHELOR',
  MASTER = 'MASTER',
  DOCTORAL = 'DOCTORAL',
  ASSOCIATE = 'ASSOCIATE',
  EDUCATIONAL = 'EDUCATIONAL',
  LICENSURE = 'LICENSURE',
  OTHER = 'OTHER',
}

export enum QualificationTypeEnumValues {
  BACHELOR = "Bachelor's degree",
  MASTER = "Master's degree",
  DOCTORAL = 'Doctoral degree',
  ASSOCIATE = 'Associate degree',
  EDUCATIONAL = 'Educational Certification',
  LICENSURE = 'Licensure',
  OTHER = 'Other',
}

export enum TaskableTypeEnum {
  REQUEST_FORM = CommonTypeEnum.REQUEST_FORM_TABLE,
  CANDIDATE = CommonTypeEnum.CANDIDATE_TABLE,
  TASK = CommonTypeEnum.TASK_TABLE,
  EMPLOYEE = CommonTypeEnum.EMPLOYEE_TABLE,
  NOTE = CommonTypeEnum.NOTE_TABLE,
}
export enum TaskStatusEnum {
  PENDING = 'PENDING',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED',
}

export enum WorkShiftEnum {
  NORMAL_SHIFT = 'NORMAL_SHIFT',
  SPECIAL_SHIFT = 'SPECIAL_SHIFT',
}

const WorkShiftEnumValues = {
  NORMAL_SHIFT: 'Normal Shift',
  SPECIAL_SHIFT: 'Special Shift',
};

export const ToWorkShiftEnumValues = (a: WorkShiftEnum) => WorkShiftEnumValues[a];

export enum OrgLevel {
  FUNCTIONAL = 'functional',
  DIVISION = 'division',
  DEPARTMENT = 'department',
  UNIT = 'unit',
}

export enum OrgLevelPrefix {
  FUNCTIONAL = 'FAB',
  DIVISION = 'DIV',
  DEPARTMENT = 'DEP',
  UNIT = 'UNI',
}

export const ORG_MAX_PREFIX_LENGTH = 3;
export const ORG_LEVELS = [OrgLevel.FUNCTIONAL, OrgLevel.DIVISION, OrgLevel.DEPARTMENT, OrgLevel.UNIT];

export enum ScopeEmployeeListEnum {
  ALL = 'ALL',
  IN_ORGANIZE = 'IN_ORGANIZE',
  ASSIGNED_REQUEST_FORM = 'ASSIGNED_REQUEST_FORM',
}

export enum NotableTypeEnum {
  REQUEST_FORM = CommonTypeEnum.REQUEST_FORM_TABLE,
  CANDIDATE = CommonTypeEnum.CANDIDATE_TABLE,
}

export enum PermissionOnWidget {
  HIRING_MANAGER = 'rcm_get_hiring_manager_widget',
  RECRUITER = 'rcm_get_recruiter_widget',
  HRBP = 'rmc_get_hrbp_widget',
  TALENT_UNIT = 'rmc_get_talent_unit_widget',
}

export enum AssignationStatusEnum {
  REASSIGN = 'REASSIGN',
}

export enum InquiryRoleTypeEnum {
  HIRING_MANAGER = 'hiring-manager',
  RECRUITER = 'recruiter',
  HRBP = 'hrbp',
  TALENT_UNIT = 'talent_unit',
}

export enum AttachmentCollectionEnum {
  APPLICATION_CV = 'application.cv',
  APPLICATION_ATTACHMENT = 'application.attachment',
  APPLICATION_INTERVIEW_SHEET = 'application.interviewSheet',
  APPLICATION_REFERENCE_CHECK = 'application.reference_check',
  TASK_ATTACHMENT = 'task.attachment',
  KANBAN_BOARD_APPROVAL = 'kanban_board.approval',
  REQUEST_FORM_APPROVAL = 'request_form.approval',
  REQUEST_FORM_APPROVAL_STAGE = 'request_form.approval.stage',
}

export enum AttachableTypeEnum {
  CANDIDATES = CommonTypeEnum.CANDIDATE_TABLE,
  REQUEST_FORM_CANDIDATES = CommonTypeEnum.REQUEST_FORM_CANDIDATE_TABLE,
  TASKS = CommonTypeEnum.TASK_TABLE,
  POSITIONS = CommonTypeEnum.POSITION_TABLE,
  BRANCHES = CommonTypeEnum.BRANCH_TABLE,
  USERS = CommonTypeEnum.USER_TABLE,
  EMPLOYEES = CommonTypeEnum.EMPLOYEE_TABLE,
  KANBAN_BOARDS = CommonTypeEnum.KANBAN_BOARD_TABLE,
  APPROVALS = 'approvals',
  REQUEST_FORM = CommonTypeEnum.REQUEST_FORM_TABLE,
  REQUEST_FORM_APPROVAL_STAGE = CommonTypeEnum.REQUEST_FORM_APPROVAL_STAGE,
}

export enum KanbanBoardStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
}

export enum KanbanBoardStepTypeEnum {
  APPLICANT = 'applicant',
  LONGLISTED = 'longlisted',
  SHORTLISTED = 'shortlisted',
  SCHEDULED = 'scheduled',
  INTERVIEWED = 'interviewed',
  REFERENCE_CHECK = 'reference_check',
  JOB_OFFER = 'job_offer',
  REJECTED = 'rejected',
}

export const KanbanBoardStepTypeEnumValue = {
  APPLICANT: 'Applicant',
  LONGLISTED: 'Longlisted',
  SHORTLISTED: 'Shortlisted',
  SCHEDULED: 'Interview Scheduled',
  INTERVIEWED: 'Interviewed',
  REFERENCE_CHECK: 'Reference Check',
  JOB_OFFER: 'Offer',
  REJECTED: 'Not Suitable',
};
export const ToKanbanBoardStepTypeEnumValues = (type: KanbanBoardStepTypeEnum) => KanbanBoardStepTypeEnumValue[type];

export enum KanbanBoardStepActivitiesEnum {
  NOTIFY_ACKNOWLEDGEMENT_CANDIDATE = 'notify_acknowledgement_candidate',
  NOTIFY_INTERVIEW_SCHEDULE_CANDIDATE = 'notify_interview_schedule_candidate',
  NOTIFY_REFERENCE_CHECK_CANDIDATE = 'notify_reference_check_candidate',
  NOTIFY_JOB_OFFER_CANDIDATE = 'notify_job_offer_candidate',
  NOTIFY_UNSUCCESSFUL_CANDIDATE = 'notify_unsuccessful_candidate',
}

export enum ApprovalMatrixTypeEnum {
  NEW = HiringReasonEnum.NEW,
  ADDITION = HiringReasonEnum.ADDITION,
  REPLACEMENT = HiringReasonEnum.REPLACEMENT,
}

export enum ApprovalMatrixActorableTypeEnum {
  EMPLOYEE = CommonTypeEnum.EMPLOYEE_TABLE,
  POSITION = CommonTypeEnum.POSITION_TABLE,
}

export enum ApprovalMatrixStageTypeEnum {
  ORIGINATOR = 'ORIGINATOR',
  HIRING_MANAGER = 'HIRING_MANAGER',
  FUNCTIONAL_HEAD = 'FUNCTIONAL_HEAD',
  C_LEVEL = 'C_LEVEL',
  HRBP = 'HRBP',
  CHRO = 'CHRO',
  CEO = 'CEO',
  POSITION = 'POSITION',
  EMPLOYEE = 'EMPLOYEE',
}

const ApprovalMatrixStageTypeEnumValues = {
  ORIGINATOR: 'Originator',
  HIRING_MANAGER: 'Hiring Manager',
  FUNCTIONAL_HEAD: 'Functional Head',
  C_LEVEL: 'C-Level',
  HRBP: 'HR Business Partner',
  CHRO: 'Chief Human Resources Officer',
  CEO: 'Chief Executive Officer',
  POSITION: 'Position',
  EMPLOYEE: 'Employee',
};

export enum StageActorableTypeEnum {
  POSITIONS = CommonTypeEnum.POSITION_TABLE,
  EMPLOYEES = CommonTypeEnum.EMPLOYEE_TABLE,
}

export const ToApprovalMatrixStageTypeEnumValues = (stage: ApprovalMatrixStageTypeEnum) =>
  ApprovalMatrixStageTypeEnumValues[stage];

export enum StationEnum {
  HEAD_OFFICE = 'HEAD_OFFICE',
  BRANCH = 'BRANCH',
  DEFAULT = 'DEFAULT',
}

export enum ApprovalMatrixHasPermissionsTypeEnum {
  STAGE = CommonTypeEnum.APPROVAL_MATRIX_STAGE_TABLE,
  ACTOR = CommonTypeEnum.APPROVAL_MATRIX_STAGE_ACTOR_TABLE,
  REPRESENTOR = CommonTypeEnum.APPROVAL_MATRIX_REPRESENT_TABLE,
}

export enum ApprovalMatrixPermissionEnum {
  CREATE_DRAFT_FORM = 'rcm_create_draft_form',
  REVIEW_REQUEST_FORM = 'rcm_review_form',
  APPROVE_REQUEST_FORM = 'rcm_approve_form',
  EDIT_REQUEST_FORM = 'rcm_edit_form',
  SUBMIT_REQUEST_FORM = 'rcm_create_request_form',
}

export enum RequestFromApprovalStageStatusEnum {
  REJECTED = 'rejected',
  PENDING = 'pending',
  SKIPPED = 'skipped',
  APPROVED = 'approved',
}
export enum RunningNumberTypeEnum {
  REQUEST_FORM = 'request-form',
}

export enum FTECandidateStatusEnum {
  // INTERVIEWED STATUS
  VERY_SUITABLE = 'very_suitable',
  SUITABLE = 'suitable',
  RESERVED = 'reserved',
  NOT_SUITABLE = 'not_suitable',

  // REFERENCE CHECK STATUS
  PASSED = 'passed',
  WAIVED = 'waived',
  FAILED = 'failed',

  // JOB OFFER STATUS
  INPROGRESS = 'in-progress',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export enum CandidateInterviewStatusEnum {
  // INTERVIEWED STATUS
  VERY_SUITABLE = 'very_suitable',
  SUITABLE = 'suitable',
  RESERVED = 'reserved',
  NOT_SUITABLE = 'not_suitable',
}

export enum CandidateReferenceCheckStatusEnum {
  // REFERENCE CHECK STATUS
  PASSED = 'passed',
  WAIVED = 'waived',
  FAILED = 'failed',
  INPROGRESS = 'in-progress',
}

export enum CandidateJobOfferStatusEnum {
  // JOB OFFER STATUS
  INPROGRESS = 'in-progress',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export enum CandidateRejectStatusEnum {
  // Reject status
  CANCELLED_INTERVIEW = 'cancelled_interview',
  FAILED_LONGLISTED = 'failed_longlisted',
  FAILED_SHORTLISTED = 'failed_shortlisted',
}

export enum RequestFormFTEStatusEnum {
  CANCELED = 'CANCELED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
  PAUSED = 'PAUSED',
  OPENED = 'OPENED',
  CLOSED = 'CLOSED',
  REOPEN = 'REOPEN',
}

export enum RedisEventEnum {
  KANBAN_BOARD_CANDIDATE_CHANGED = 'KANBAN_BOARD_CANDIDATE_CHANGED',
  REQUEST_FORM_CHANGED = 'REQUEST_FORM_CHANGED',
  REQUEST_FORM_CHANGED_STATUS = 'REQUEST_FORM_CHANGED_STATUS',
  REQUEST_FORM_COMMENT_ADDED = 'REQUEST_FORM_COMMENT_ADDED',
  REQUEST_FORM_CANDIDATE_COMMENT_ADDED = 'REQUEST_FORM_CANDIDATE_COMMENT_ADDED',
}

export enum ScheduleMessageNameEnum {
  CHANGE_JOB_STATUS = RedisEventEnum.REQUEST_FORM_CHANGED_STATUS,
  CHANGE_CANDIDATE_STATUS = 'candidate-status-changed',
  GEN_APPLICATION = 'application-generated',
  GEN_SOCIAL_LINK = 'generate-social-deeplink',
  GEN_LINK = 'generate-request-form-deep-link',
}

export enum NotifyQueueEnum {
  NOTIFY_HIRING_MANAGER = 'NOTIFY_HIRING_MANAGER',
  NOTIFY_NEED_APPROVER = 'NOTIFY_NEED_APPROVER',
  NOTIFY_NEED_RECRUITER = 'NOTIFY_NEED_RECRUITER',
  NOTIFY_NEED_TALENT_UNIT = 'NOTIFY_NEED_TALENT_UNIT',
}

export enum RequestFormEventEnum {
  APPROVED = 'request_form.approved',
  REJECTED = 'request_form.rejected',
  CREATED = 'request_form.created',
  UPDATED = 'request_form.updated',
  ASSIGNED = 'request_form.assigned',
  STARTED = 'request_form.stated',
  CANCELED = 'request_form.cancelled',
  PAUSED = 'request_form.paused',
  CONTINUED = 'request_form.continued',
  CLOSED = 'request_form.closed',
}

export enum Template {
  REQ_NEED_YOUR_APPROVAL = 'REQ_NEED_YOUR_APPROVAL',
  REQ_REVIEW_REQUIRED = 'REQ_REVIEW_REQUIRED',
  REQ_ACTIONS_REQUIRED = 'REQ_ACTIONS_REQUIRED',
  REQ_ACQUISITION_REQUIRED = 'REQ_ACQUISITION_REQUIRED',
  REQ_CANDIDATE_ACCEPTED = 'REQ_CANDIDATE_ACCEPTED',
  REQ_CANDIDATE_REJECTED = 'REQ_CANDIDATE_REJECTED',
  REQ_STATUS_UPDATES = 'REQ_STATUS_UPDATES',
  REQ_COMMENT_MENTIONED = 'REQ_COMMENT_MENTIONED',
  REQ_CANDIDATE_COMMENT_MENTIONED = 'REQ_CANDIDATE_COMMENT_MENTIONED',
}

export enum CommentObjectTypeEnum {
  REQUEST_FORMS = 'recruitment.request_forms',
  REQUEST_FORM_CANDIDATES = 'recruitment.request_form_candidates',
}

export enum NotifyCommentOptionEnum {
  STANDARD = 'standard',
  IMPORTANT = 'important',
  URGENT = 'urgent',
}

export declare enum CandidatePortalStatusEnum {
  SCHEDULED = 'scheduled',
  INTERVIEWED = 'interviewed',
  SELECTED = 'selected',
  REJECTED = 'rejected',
}

export const AdvertisingChannelCandidatePortal = {
  ABA_WEBSITE: 'aba_bank_website',
  FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE: 'paid_local_job_boards',
  NON_FEE_CHARGED_LOCAL_JOB_BOARD_WEBSITE: 'free_local_job_board',
  FACEBOOK: 'facebook',
  LINKEDIN: 'linkedin',
  TELEGRAM: 'telegram',
  PHNOM_PENH_POST: 'newspaper',
};

export const SubmissionTypeEnum = {
  FORM: 'form',
  CV: 'cv',
};

export enum TagNameEnum {
  WORK_SHIFTS = 'work_shifts',
  POSITIONS = 'positions',
  LOCATIONS = 'locations',
  LOCATION_TYPES = 'location_types',
  EMPLOYMENT_TYPES = 'employment_types',
  EXPECTED_START_WORK = 'expected_start_work',
  CHANNELS = 'channels',
  SKILLS = 'skills',
  OTHERS = 'others',
}
