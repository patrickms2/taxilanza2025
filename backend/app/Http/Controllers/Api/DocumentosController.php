<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\DocumentosRepositoryInterface;

class DocumentosController extends Controller
{
    protected DocumentosRepositoryInterface $documentosRepository;
    protected Request $request;

    public function __construct(DocumentosRepositoryInterface $documentosRepository, Request $request)
    {
        $this->documentosRepository = $documentosRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->documentosRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="documentos.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_documento','user_id','category_id','nif','texto','file_name','file_path',
        'year','mes',

        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_documento'],$row['user_id'],$row['category_id'],$row['nif'],$row['texto'],$row['file_name'],$row['file_path'],
        $row['year'],$row['mes'],

        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->documentosRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->documentosRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->documentosRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->documentosRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->documentosRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->documentosRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

