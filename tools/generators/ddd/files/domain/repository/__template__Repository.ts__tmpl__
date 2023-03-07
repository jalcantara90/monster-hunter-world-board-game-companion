import { CreateBrigadeRequest } from "../requests/Create<%=className%>Request";
import { UpdateBrigadeRequest } from "../requests/Update<%=className%>Request";
import { BrigadeResponse } from "../responses/BrigadeResponse";

export interface BrigadeRepository {
  find(id: string): Promise<Create<%=className%>Request>;
  create(<%=propertyName%>: Create<%=className%>Request): Promise<<%=className%>Response>;
  update(id: string, <%=propertyName%>: Create<%=template%>Request): Promise<<%=className%>Response>;
  delete(id: string): Promise<void>;
}

export const <%=constant%>_REPOSITORY = '<%=constant%>_REPOSITORY';
